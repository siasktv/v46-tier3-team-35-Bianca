import { useEffect } from "react";

export const Callback = (props) => {
  useEffect(() => {
    if (/access_token|id_token|error/.test(props.location.hash)) {
      props.auth.handleAuthentication();
    }
  }, []);

  return <h1>Loading...</h1>;
};
