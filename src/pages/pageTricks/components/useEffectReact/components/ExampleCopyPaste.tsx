import { useRef, useState } from "react";
import { Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import { PrismCode } from "../../../../../common/components";

export const ExampleCopyPaste = () => {
  const [text, setText] = useState("");
  const [isCopy, setIsCopy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setText(value);
  };

  const handleClick = async () => {
    if (!inputRef?.current) {
      return;
    }

    inputRef.current.select();
    /**
     * Alternative one but is deprecated
     * document.execCommand("copy");
     */

    console.log("value", text);
    await navigator.clipboard.writeText(text);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  return (
    <>
      <h3 className="mb-4">
        Example <span className="text-muted">copy paste</span>
      </h3>
      <form className="mb-4">
        <InputGroup className="mb-3">
          <FormControl
            ref={inputRef}
            type="text"
            placeholder="Enter email"
            value={text}
            onChange={handleChange}
          />
          <Button
            onClick={handleClick}
            variant="outline-secondary"
            id="button-addon2"
          >
            Copy
          </Button>
        </InputGroup>
        {isCopy && (
          <Alert variant="success">
            <strong>{text}</strong> has been copy in your clipboard
          </Alert>
        )}
      </form>

      <div className="mb-4">
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
