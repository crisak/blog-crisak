import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PrismCode } from "../../../../../common/components";

export const ExampleFocus = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setText(value);
  };

  const handleClick = () => {
    if (!inputRef?.current) {
      return;
    }

    inputRef.current.focus();
  };

  return (
    <>
      <h3 className="mb-4">
        Example <span className="text-muted">with input</span>
      </h3>
      <form className="mb-4">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={inputRef}
            type="text"
            placeholder="Enter email"
            value={text}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>
          Focus button
        </Button>
      </form>

      <div>
        <p>
          Output <code>inputRef</code>
        </p>
        <PrismCode
          code={JSON.stringify(text, null, 2)}
          language="js"
          plugins={["line-numbers"]}
        />
      </div>
    </>
  );
};
