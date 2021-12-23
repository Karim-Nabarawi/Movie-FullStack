import { ErrorMessage, Field } from "formik";
import React from "react";

const TextField = ({ field, displayName }) => {
  return (
    <div className="mb-3">
      <label htmlFor={field}>{displayName}</label>
      <Field name={field} id={field} className="form-control" />
      <ErrorMessage name={field}>{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
    </div>
  );
};
export default TextField;
