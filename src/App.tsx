import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./common/components/navbar/Navbar";
import { Router } from "./router";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
