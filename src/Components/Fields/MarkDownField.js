import React from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MarkDownField = ({ field, displayName }) => {
  const { values } = useFormikContext();
  return (
    <MarkdownFormContainer className="mb-3">
      <div>
        <label>{displayName}</label>
        <Field name={field} id={field} as="textarea" className="form-textarea" />
      </div>
      <div>
        <label>{displayName} (preview):</label>
        <MarkdownContainer>
          <ReactMarkdown>{values[field]}</ReactMarkdown>
        </MarkdownContainer>
      </div>
      <ErrorMessage name={field}>{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
    </MarkdownFormContainer>
  );
};
export default MarkDownField;

const MarkdownFormContainer = styled.div`
  display: flex;
  textarea {
    width: 500px;
    height: 500px;
    margin-right: 15px;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
`;

const MarkdownContainer = styled.div`
  border: 1px dashed black;
  width: 500px;
  height: 500px;
`;
