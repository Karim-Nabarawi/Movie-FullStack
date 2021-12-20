import React from "react";
import styled from "styled-components";

const DisplayErrors = ({ errors }) => {
  return (
    <>
      {errors && (
        <ErrorContainer>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ErrorContainer>
      )}
    </>
  );
};
export default DisplayErrors;

const ErrorContainer = styled.ul`
  color: red;
`;
