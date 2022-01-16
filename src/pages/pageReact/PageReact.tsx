import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { PageTrickContainer } from "./styles";

export const PageReact = () => {
  return (
    <PageTrickContainer>
      <Nav defaultActiveKey={`all`} className="flex-column">
        <LinkContainer to={`all`}>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
      </Nav>
      <main>
        <Outlet />
      </main>
    </PageTrickContainer>
  );
};
