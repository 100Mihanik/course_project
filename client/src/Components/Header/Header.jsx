import { DropdownButton, Dropdown, Image, Nav } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
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
    <header>
      <div className="d-flex justify-content-between my-3">
        <div className="d-flex align-items-center">
          <Image
            className="mx-2"
            src="https://i.imgur.com/7aPkzKo.jpg"
            roundedCircle
            height="30"
          />
          <div>Username</div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <DropdownButton id="dropdown-basic-button" title="Login">
              <Dropdown.Item onClick={signInGoog}>Google</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Facebook</Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <span className="toggle mx-2">
              <input id="checkbox" className="checkbox" type="checkbox" />
              <label htmlFor="checkbox" />
            </span>
          </div>
        </div>
      </div>

      {/* ___NAVIGATION___ */}
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link to="/" as={Link} eventKey="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/profile" as={Link} eventKey="/profile">
            Profile
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;
