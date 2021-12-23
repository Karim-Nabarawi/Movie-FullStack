import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import TextField from "../Fields/TextField";
import Map from "../utils/Map";

const MovieTheaterForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is required").firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName="Name:" />
          <MapContainer>
            <Map />
          </MapContainer>
          <button className="btn btn-primary" type="submit" disabled={formikProps.isSubmitting}>
            Save changes
          </button>
          <Link className="btn btn-secondary" to="/movietheaters">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
};
export default MovieTheaterForm;

const MapContainer = styled.div`
  margin-bottom: 16px;
`;
