import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../Components/forms/TextField";

const GenreForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is required").firstLetterUppercase(),
      })}
    >
      <Form>
        <TextField field="name" displayName="Name:" />
        <button className="btn btn-primary" type="submit">
          Save changes
        </button>
        <Link className="btn btn-secondary" to="/genres">
          Cancel
        </Link>
      </Form>
    </Formik>
  );
};
export default GenreForm;
