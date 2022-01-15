import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { PageTrickContainer } from "./styles";
import { Outlet } from "react-router-dom";

export const PageTricks = () => {
  return (
    <PageTrickContainer>
      <Nav defaultActiveKey={`all`} className="flex-column">
        <LinkContainer to={`all`}>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to={`debounce`}>
          <Nav.Link>Debounce</Nav.Link>
        </LinkContainer>
        <Nav.Link eventKey={`disabled`} disabled>
          Disabled
        </Nav.Link>
      </Nav>
      <main>
        <Outlet />
      </main>
    </PageTrickContainer>
  );
};
