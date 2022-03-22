import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Login from "./Login";
import h from "./header.module.css";

const changeThemeLocalStorage = () => {
  if (window.localStorage.getItem("theme") === "dark") {
    window.localStorage.setItem("theme", "light")
  } else {
    window.localStorage.setItem("theme", "dark")
  }
  window.location.reload();
};

function Header() {
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
          <label className={h.check}>
            <input
              className={h.check_input}
              type="checkbox"
							checked={window.localStorage.getItem("theme") !== "dark"}
              onChange={changeThemeLocalStorage}
            />
            <div className={h.check_box}></div>
          </label>
          <Login />
        </div>
      </div>

      {/* ___NAVIGATION___ */}
      <Nav justify variant="tabs" defaultActiveKey="/">
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
