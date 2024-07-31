import { useMemo } from "react";

/**
 * Custom hook to generate initial values for a form based on a schema.
 *
 * @param {Array} schema - The schema defining the form fields.
 * @returns {Object} initialValues - An object with keys corresponding to form field names and empty values.
 */

const useInitialValues = (schema) => {
  return useMemo(() => {
    const initialValues = {};

    // Iterate over the schema to build initial values
    schema.forEach((field) => {
      if (field.type === "array") {
        // Handle array types by initializing nested fields
        initialValues[field.name] = [
          field.fields.reduce((acc, subField) => {
            // Initialize each subField in the array with an empty string
            acc[subField.name] = "";
            return acc;
          }, {}),
        ];
      } else {
        // Initialize non-array fields with an empty string
        initialValues[field.name] = "";
      }
    });

    return initialValues;
  }, [schema]); // Recompute only when schema changes
};

export default useInitialValues;
