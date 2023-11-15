import auth0 from "auth0-js";
import axios from "axios";

const auth0Const = new auth0.WebAuth({
  domain: import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN,
  clientID: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: import.meta.env.VITE_REACT_APP_AUTH0_CALLBACK_URL,
  responseType: "token id_token",
  scope: "openid profile email",
});

const login = () => {
  auth0Const.authorize();
};

const setSession = async (authResult) => {
  if (!authResult) return;
  console.log(authResult);
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
    let response = await axios.post("http://localhost:8000/users/create", {
      email: authResult.idTokenPayload.email,
      fullName: authResult.idTokenPayload.name,
      image: authResult.idTokenPayload.picture,
    });
    console.log("respuesta",response.data);

     // If the user is already created, get the user data from the server
     if (response.status === 400) {
      response = await axios.get(`http://localhost:8000/users/${authResult.idTokenPayload.email}`);
    }

    console.log("respuesta", response.data);

     // Store the returned user in the session
     localStorage.setItem("user", JSON.stringify(response.data));
  }catch(error){
    console.log(error);
  }
};

const handleAuthentication = () => {
  auth0Const.parseHash(async (err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      await setSession(authResult);
      window.location.assign("http://127.0.0.1:5173/");
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
    returnTo: "http://127.0.0.1:5173/",
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

// const getProfile = (cb) => {
//   if (userProfile) return cb(userProfile);
//   auth0Const.client.userInfo(getAccessToken(), (err, profile) => {
//     if (profile) userProfile = profile;
//     cb(profile, err);
//   });
// };

const getProfile = async () => {
  // Get the user data from the local storage
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if the user data exists and it has an _id property
  if (user && user._id) {
    try {
      const response = await axios.get(`http://localhost:8000/users/${user._id}`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    console.error('User not found in local storage');
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
