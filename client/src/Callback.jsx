import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Callback = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (/access_token|id_token|error/.test(props.loc.hash)) {
      props.auth.handleAuthentication();
      navigate("/");
    } else {
      throw new Error("Invalid callback URL.");
    }
  }, []);

  return <h1>Loading...</h1>;
};
