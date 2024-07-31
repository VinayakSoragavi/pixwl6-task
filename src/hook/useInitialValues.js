import { useMemo } from "react";

const useInitialValues = (schema) => {
  return useMemo(() => {
    const initialValues = {};

    schema.forEach((field) => {
      if (field.type === "array") {
        initialValues[field.name] = [
          field.fields.reduce((acc, subField) => {
            acc[subField.name] = "";
            return acc;
          }, {}),
        ];
      } else {
        initialValues[field.name] = "";
      }
    });

    return initialValues;
  }, [schema]);
};

export default useInitialValues;
