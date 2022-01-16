import { Container } from "react-bootstrap";
import { ExampleCopyPaste } from "./components/ExampleCopyPaste";
import { ExampleFocus } from "./components/ExampleFocus";
import { ExampleLoading } from "./components/ExampleLoading";
import { ExampleRender } from "./components/ExampleRender";
import { ExampleScrollAnimation } from "./components/ExampleScrollAnimation";
import { ExampleVideo } from "./components/ExampleVideo";

export const UseEffectReact = () => {
  return (
    <Container className="p-5">
      <h2 className="mb-4">Use effect</h2>

      <div className="mb-5">
        <ExampleFocus />
      </div>
      <hr />
      <div className="mb-5">
        <ExampleCopyPaste />
      </div>
      <hr />
      <div className="mb-5">
        <ExampleVideo />
      </div>
      <hr />
      <div className="mb-5">
        <ExampleRender />
      </div>
      <hr />
      <div className=" pt-3 mb-5">
        <ExampleLoading />
      </div>

      <hr />
      <div className=" mb-5">
        <ExampleScrollAnimation />
      </div>
    </Container>
  );
};
