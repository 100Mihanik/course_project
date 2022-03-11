import { useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Login() {
  // Google auth, doc-tion: https://developers.google.com/identity/sign-in/web/reference?hl=da
  useEffect(() => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id:
            "45049386046-b4hms2juhih55tb8frnfpdj69k4jb1ma.apps.googleusercontent.com",
        })
        .then(
          () => console.log("library Google Ok"),
          () => console.log("library Google ERR")
        );
    });
  });
  function signInGoog() {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: "profile email",
    }).then(
      (googleUser) =>
        console.log(
          "Auth Google Ok",
          googleUser.getAuthResponse().id_token,
          googleUser.getBasicProfile().getEmail()
        ), // here i took token and email
      () => console.log("Auth Google Err")
    );
  }
  // End Google auth

  return (
    <DropdownButton id="dropdown-basic-button" title="Login">
      <Dropdown.Item onClick={signInGoog}>Google</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Facebook</Dropdown.Item>
    </DropdownButton>
  );
}
export default Login;
