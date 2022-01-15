import styled from "styled-components";
import { heightNavbar } from "../../theme/variables";
export const PageTrickContainer = styled.div`
  display: flex;
  width: 100%;

  & > div {
    background-color: white;
    min-width: 200px;
    max-width: 200px;
    width: 200px;
    height: calc(100vh - ${heightNavbar});
    overflow-y: auto;
    padding-top: 2rem;
    box-shadow: 5px 0px 20px 0px #00000024;
  }

  main {
    width: 100%;
    height: calc(100vh - ${heightNavbar});
    overflow-y: auto;
  }
`;
