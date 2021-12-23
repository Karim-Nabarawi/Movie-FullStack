import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../Fields/TextField";

const MovieTheaterForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is required").firstLetterUppercase(),
      })}
    >
      {(formikProps) => {
        <Form>
          <TextField displayName="Name" field="name" />
          <button className="btn btn-primary" type="submit" disabled={formikProps.isSubmitting}>
            Save changes
          </button>
          <Link className="btn btn-secondary" to="/movietheaters">
            Cancel
          </Link>
        </Form>;
      }}
    </Formik>
  );
};
export default MovieTheaterForm;
