import { useEffect } from "react";

export const Callback = (props) => {
  useEffect(() => {
    if (/access_token|id_token|error/.test(props.loc.hash)) {
      props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  }, []);
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
