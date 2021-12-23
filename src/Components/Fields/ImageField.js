import { ErrorMessage, useFormikContext } from "formik";
import React, { useState } from "react";
import styled from "styled-components";

const ImageField = ({ field, displayName, imageURL = "" }) => {
  const [imageBase64, setImageBase64] = useState("");
  const [imageURLLink, setImageURLLink] = useState(imageURL);
  const { values } = useFormikContext();

  const changeHandler = (eventArgs) => {
    if (eventArgs.currentTarget.files) {
      const file = eventArgs.currentTarget.files[0];
      if (file) {
        toBase64(file)
          .then((base64Representation) => {
            setImageBase64(base64Representation);
          })
          .catch((error) => console.log(error));
        values[field] = file;
        setImageURLLink("");
      } else {
        setImageBase64("");
      }
    }
  };

  const toBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        //console.log(e.target.result);
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="mb-3">
      <label htmlFor={field}>{displayName}</label>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        name={field}
        id={field}
        className="form-control"
        onChange={changeHandler}
      />
      {imageBase64 ? (
        <ImageContainer>
          <img src={imageBase64} alt="Selected" />
        </ImageContainer>
      ) : null}
      {imageURLLink ? (
        <ImageContainer>
          <img src={imageURLLink} alt="Selected" />
        </ImageContainer>
      ) : null}
      <ErrorMessage name={field}>{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
    </div>
  );
};
export default ImageField;

const ImageContainer = styled.div`
  margin-top: 10px;
  img {
    width: 450px;
  }
`;
