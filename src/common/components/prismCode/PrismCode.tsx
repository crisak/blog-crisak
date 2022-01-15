import { useEffect, useRef } from "react";
import Prism from "prismjs";

export const PrismCode = (props: any) => {
  const { code, plugins, language } = props;
  const ref = useRef(null);

  const highlight = () => {
    if (ref && ref.current) {
      Prism.highlightElement(ref.current);
    }
  };

  useEffect(() => {
    highlight();
  }, [props.code, props.plugins, props.language]);

  return (
    <pre className={!plugins ? "" : plugins.join(" ")}>
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
};
