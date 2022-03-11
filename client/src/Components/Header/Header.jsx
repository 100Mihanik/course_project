import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Login from "./Login";

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
          <div>
            <Login/>
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
