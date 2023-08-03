import react from "react";
import * as Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

const schema = {
  title: "Test form",
  type: "object",
  properties: {
    url: {
      type: "string",
    },
    title: {
      type: "string",
    },
    summary: {
      type: "string",
    },
  },
};

export const WrappedForm = () => {
  return <Form.default method={"POST"} schema={schema} validator={validator} />;
};
