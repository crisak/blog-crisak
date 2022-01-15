import { Nav } from "react-bootstrap";
import { Router } from "./Router";
import { LinkContainer } from "react-router-bootstrap";
import { PageTrickContainer } from "./styles";

export const PageTricks = () => {
  return (
    <PageTrickContainer>
      <Nav defaultActiveKey="/debounce" className="flex-column">
        <LinkContainer to="/debounce">
          <Nav.Link>Debounce</Nav.Link>
        </LinkContainer>
        <Nav.Link eventKey="debounce">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
      <main>
        <Router />
      </main>
    </PageTrickContainer>
  );
};
