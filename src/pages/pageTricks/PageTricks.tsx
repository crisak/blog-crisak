import { Nav } from "react-bootstrap";
import { Router } from "./Router";
import { PageTrickContainer } from "./styles";

export const PageTricks = () => {
  // const navigate = (path: string) => {
  //   link(path);
  // };

  return (
    <PageTrickContainer>
      <Nav defaultActiveKey="/debounce" className="flex-column">
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
