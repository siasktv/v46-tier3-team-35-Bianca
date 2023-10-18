import auth0 from "auth0-js";
import.meta.env.VITE_API_BASE_URL;

// export const Auth = (history) => {
//   return;
// };

// export const historyConst = history;

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

export const Auth = {
  auth0Const: auth0Const,
  login: login,
};
