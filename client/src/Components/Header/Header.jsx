import { DropdownButton, Dropdown, Image, Nav } from "react-bootstrap";

import GoogAuth from "./GoogAuth";

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
            <DropdownButton id="dropdown-basic-button" title="Login">
              <Dropdown.Item href="#/action-1">Google</Dropdown.Item>
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

      {/* NAVIGATION */}

      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile">Profile</Nav.Link>
          {/* eventKey="link-1" */}
        </Nav.Item>
      </Nav>
			<div>
				Низ хеадера <GoogAuth />
			</div>
    </header>
  );
}

export default Header;
