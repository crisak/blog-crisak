import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../common/components/navbar/Navbar";
import { Router } from "./Router";
import { BodyContainer } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <BodyContainer>
        <Navbar />
        <main>
          <Router />
        </main>
      </BodyContainer>
    </BrowserRouter>
  );
}

export default App;
