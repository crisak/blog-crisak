import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "./Card";

export const ExampleLoading = () => {
  const [showCard, setShowCard] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("⛳️ active->", sectionRef);
  });

  return (
    <>
      <h3 className="mb-4">
        Example <span className="text-muted">loading</span>
      </h3>
      <Button onClick={() => setShowCard(!showCard)}>
        {showCard ? "No show" : "Show card"}
      </Button>

      <div className="m-4">{showCard && <Card />}</div>
      <div className="m-4">
        {showCard && (
          <section
            ref={(ref: any) => {
              if (!ref) {
                return;
              }

              sectionRef.current = ref;
            }}
          >
            Reference element
          </section>
        )}
      </div>
    </>
  );
};
