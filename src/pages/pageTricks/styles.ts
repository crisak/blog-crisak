import styled from "styled-components";
import { heightNavbar } from "../../theme/variables";
export const PageTrickContainer = styled.div`
  display: flex;
  width: 100%;

  & > div {
    border: 1px solid red;
    background-color: white;
    width: 300px;
    height: calc(100vh - ${heightNavbar});
    overflow-y: auto;
  }

  main {
    width: 100%;
    border: 1px solid blue;
  }
`;
