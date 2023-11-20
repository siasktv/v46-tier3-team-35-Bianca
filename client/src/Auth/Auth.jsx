import auth0 from "auth0-js";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const FRONTEND_URL = import.meta.env.VITE_REACT_APP_FRONTEND_URL;

const auth0Const = new auth0.WebAuth({
  domain: import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN,
  clientID: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: `${FRONTEND_URL}/callback`,
  responseType: "token id_token",
  scope: "openid profile email",
});

const login = () => {
  auth0Const.authorize();
};

const setSession = async (authResult) => {
  if (!authResult) return;
  console.log("authResult",authResult);
  // set the time that the access token will expire
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );

  localStorage.setItem("access_token", authResult.accessToken);
  localStorage.setItem("id_token", authResult.idToken);
  localStorage.setItem("expires_at", expiresAt);

  console.group();
  console.log('email', authResult.idTokenPayload.email)
  console.log('fullName', authResult.idTokenPayload.name)
  console.log('image', authResult.idTokenPayload.picture)
  console.groupEnd();


  //call the endpoint to create the user on mongodb
  try{
    const response = await axios.post(`${BACKEND_URL}/users/create`, {
      email: authResult.idTokenPayload.email,
      fullName: authResult.idTokenPayload.name,
      image: authResult.idTokenPayload.picture,
    });
    console.log("respuesta",response.data);
  
    // Store the returned user in the session
    localStorage.setItem("user", JSON.stringify(response.data));
  }catch(error){
    console.log(error);
    if (error.response && error.response.status === 400) {
      // If the user is already created, get the user data from the server
      const response = await axios.get(`${BACKEND_URL}/users/email/${authResult.idTokenPayload.email}`);
      console.log("respuesta", response.data);
  
      // Store the returned user in the session
      localStorage.setItem("user", JSON.stringify(response.data));
    }
  }
};

const handleAuthentication = () => {
  auth0Const.parseHash(async (err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      await setSession(authResult);
      window.location.assign(`${FRONTEND_URL}/`);
    } else if (err) {
      alert(`Error: ${err.error}. Check the console for further details.`);
      console.log(err);
    }
  });
};

const isAuthenticated = () => {
  const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  return new Date().getTime() < expiresAt;
};

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  userProfile = null;
  auth0Const.logout({
    clientID: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
    returnTo: `${FRONTEND_URL}/`,
  });
};

let userProfile = null;

const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    throw new Error("No access token found.");
  }
  return accessToken;
};

const getProfile = async() => {
  // Get the user data from the local storage
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user._id;


  // Check if the user data exists
  if (userId) {
    // Get the user data from the server
    const response = await axios.get(`${BACKEND_URL}/users/${userId}`);
    console.log("respuesta", response.data);

    // Store the returned user in the session
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } else {
    console.error('User not found');
  }
};

export const Auth = {
  auth0Const: auth0Const,
  login: login,
  handleAuthentication: handleAuthentication,
  setSession: setSession,
  isAuthenticated: isAuthenticated,
  logout: logout,
  userProfile: userProfile,
  getAccessToken: getAccessToken,
  getProfile: getProfile,
};
