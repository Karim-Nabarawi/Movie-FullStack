import { ErrorMessage, useFormikContext } from "formik";
import React from "react";

const DateField = ({ field, displayName }) => {
  const { values, validateForm } = useFormikContext();
  return (
    <div className="mb-3">
      <label htmlFor={field}>{displayName}</label>
      <input
        type="date"
        className="form-control"
        name={field}
        id={field}
        defaultValue={values[field]?.toLocaleDateString("en-CA")}
        onChange={(e) => {
          const date = new Date(e.currentTarget.value + "T00:00:00");
          values[field] = date;
          validateForm();
        }}
      />
      <ErrorMessage name={field}>{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
    </div>
  );
};
export default DateField;
