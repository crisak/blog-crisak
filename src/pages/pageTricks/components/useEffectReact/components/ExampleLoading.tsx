import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "./Card";

export const ExampleLoading = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [showCard, setShowCard] = useState(false);

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
        Example <span className="text-muted">loading</span>
      </h3>
      <Button onClick={() => setShowCard(!showCard)}>
        {showCard ? "No show" : "Show card"}
      </Button>
      <div className="m-4">{showCard && <Card />}</div>
    </>
  );
};
