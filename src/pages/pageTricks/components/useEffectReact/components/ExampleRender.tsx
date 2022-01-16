import { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PrismCode } from "../../../../../common/components";

export const ExampleRender = () => {
  const [text, setText] = useState("");
  /**
   * Reference mutable
   */
  const valuePersistentRef = useRef<number>(1);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setText(value);
  };

  useEffect(() => {
    console.log("render", valuePersistentRef.current);
    valuePersistentRef.current++;
  });

  return (
    <>
      <h3 className="mb-4">
        Example <span className="text-muted"> value persistent</span>
      </h3>
      <form className="mb-4">
        <Form.Group className="mb-4" controlId="text-area">
          <Form.Label>Name</Form.Label>
          <Form.Control
            // ref={valuePersistentRef}
            type="text"
            placeholder="Any text"
            value={text}
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Button variant="primary" onClick={handleClick}>
          Focus button
        </Button> */}
      </form>

      <div>
        <p>
          Total renders (useRef): <code>{valuePersistentRef.current}</code>
        </p>
        <p>Output state</p>
        <PrismCode
          code={JSON.stringify(text, null, 2)}
          language="js"
          plugins={["line-numbers"]}
        />
      </div>
    </>
  );
};
