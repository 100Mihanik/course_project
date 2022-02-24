import {
  Col,
  Row,
  DropdownButton,
  Dropdown,
  Image,
  Nav
} from "react-bootstrap";

function Header() {
  return (
    <header>
      <Row className="my-3">
        <Col className="d-flex align-items-center" md="2">

            <Image
              className="mx-2"
              src="https://i.imgur.com/7aPkzKo.jpg"
              roundedCircle
              height="30"
            />
            <div>Username</div>
 
        </Col>
        <Col md="10">
          <div className="d-flex align-items-center justify-content-end">
            <DropdownButton id="dropdown-basic-button" title="Login">
              <Dropdown.Item href="#/action-1">Google</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Facebook</Dropdown.Item>
            </DropdownButton>

						<span className="toggle">
            <input

              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
						

          </div>
        </Col>
      </Row>

      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Profile</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;
