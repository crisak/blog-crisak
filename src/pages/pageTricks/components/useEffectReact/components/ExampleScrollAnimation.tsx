import { useEffect, useRef, useState } from "react";

export const ExampleScrollAnimation = () => {
  const [background, setBackground] = useState("pink");
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const measures = divRef.current?.getBoundingClientRect();

      const diffPixelsDivTopWindow = measures?.y || 1;

      const backgroundColor = diffPixelsDivTopWindow <= 40 ? "green" : "pink";

      setBackground(backgroundColor);
    };

    const divElement = document.querySelector(".page-main-tricks");

    divElement?.addEventListener("scroll", handleScroll);

    return () => {
      divElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h3 className="mb-4">
        Example <span className="text-muted">scroll animation</span>
      </h3>
      <div>
        <div
          ref={divRef}
          style={{ height: "100vh", backgroundColor: background }}
        ></div>
      </div>
    </>
  );
};
