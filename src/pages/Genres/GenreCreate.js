import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../Components/forms/TextField";

const GenreCreate = () => {
  return (
    <div className="te">
      <h3>Create Genre</h3>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (value) => {
          //Form Posted
          await new Promise((r) => setTimeout(r, 1));
          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("This field is required").firstLetterUppercase(),
        })}
      >
        {(props) => (
          <Form>
            <TextField field="name" displayName="Name:" />
            <button disabled={props.isSubmitting} className="btn btn-primary" type="submit">
              Save changes
            </button>
            <Link className="btn btn-secondary" to="/genres">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default GenreCreate;
