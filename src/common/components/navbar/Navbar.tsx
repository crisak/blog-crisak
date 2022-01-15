import {
  Container,
  Navbar as NavbarBt,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const link = useNavigate();

  const navigate = (path: string) => {
    link(path);
  };

  return (
    <NavbarBt bg="dark" expand="lg" variant="dark">
      <Container>
        <NavbarBt.Brand href="#home">React-Bootstrap</NavbarBt.Brand>
        <NavbarBt.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBt.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/tricks")}>Tricks js</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/js-fundamentals")}>
                Js fundamentals
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => navigate("/js-fundamentals")}>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBt.Collapse>
      </Container>
    </NavbarBt>
  );
};
