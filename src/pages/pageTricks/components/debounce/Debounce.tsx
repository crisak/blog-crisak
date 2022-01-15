import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { PrismCode } from "../../../../common/components";
import { functionAsync } from "../../../../common/services/functionAsync";

const code = `
const debounce = function (fnCallback: Function, timeout = 1000) {
  let timeoutRef: NonNullable<NodeJS.Timeout>;
  return function (...argumentsData: any[]) {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    const context = this;

    timeoutRef = setTimeout(() => {
      fnCallback.apply(context, argumentsData);
    }, timeout);
  };
};
`;

const debounce = function (fnCallback: Function, timeout = 1000) {
  let timeoutRef: NonNullable<NodeJS.Timeout>;
  return function (...argumentsData: any[]) {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    const context = this;

    timeoutRef = setTimeout(() => {
      fnCallback.apply(context, argumentsData);
    }, timeout);
  };
};

export const Debounce = () => {
  const [valueSearch, setValueSearch] = useState<any>();

  const findValueApi = async (valueRef: any) => {
    console.log("👌 execute api");
    const value = valueRef.target.value;
    const response = await functionAsync({ user: value });
    setValueSearch(response);
  };

  const debounceFindValue = debounce(findValueApi, 5000);

  return (
    <Container className="p-5">
      <h2 className="mb-4">Debounce trick</h2>
      <div className="mb-4">
        <PrismCode code={code} language="js" plugins={["line-numbers"]} />
      </div>
      <h3 className="mb-4">Example</h3>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={debounceFindValue}
        />
        <Form.Text className="text-muted">
          Look for the value each 1 second.
        </Form.Text>
      </Form.Group>

      <div className="mb-4">
        {valueSearch && (
          <PrismCode
            code={JSON.stringify(valueSearch, null, 2)}
            language="js"
            plugins={["line-numbers"]}
          />
        )}
      </div>
    </Container>
  );
};
