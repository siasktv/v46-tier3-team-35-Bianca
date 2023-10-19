import auth0 from "auth0-js";

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

const setSession = (authResult) => {
  console.log(authResult);
  // set the time that the access token will expire
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );

  localStorage.setItem("access_token", authResult.accessToken);
  localStorage.setItem("id_token", authResult.idToken);
  localStorage.setItem("expires_at", expiresAt);
};

const handleAuthentication = () => {
  auth0Const.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      setSession(authResult);
      //   window.history.pushState({}, "Home", "/");
      //   window.location.reload();
    } else if (err) {
      //   window.history.pushState({}, "Home", "/");
      //   window.location.reload();
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
  auth0Const.logout({
    clientID: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
    returnTo: "http://localhost:5173",
  });
};

export const Auth = {
  auth0Const: auth0Const,
  login: login,
  handleAuthentication: handleAuthentication,
  setSession: setSession,
  isAuthenticated: isAuthenticated,
  logout: logout,
};
