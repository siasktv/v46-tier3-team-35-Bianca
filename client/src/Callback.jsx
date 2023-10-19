import { useNavigate, redirect } from "react-router-dom";
import { useEffect } from "react";

export const Callback = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (/access_token|id_token|error/.test(props.loc.hash)) {
      props.auth.handleAuthentication();
    }
    navigate("/");
  }, []);

  //   if (/access_token|id_token|error/.test(props.loc.hash)) {
  //     props.auth.handleAuthentication();
  //   } else {
  //     throw new Error("Invalid callback URL.");
  //   }

  //   return redirect("/");
  return <h1>Loading...</h1>;
};

// if (err == null) {
//     // debugger;
//     // navigate("/");
//   } else {
//     // navigate("/");
//     alert(`Error: ${err.error}. Check the console for further details.`);
//     console.log(err);
// }
