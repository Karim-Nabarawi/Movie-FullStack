import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { genresURL } from "../../Api";
import GenreForm from "../../Components/forms/GenreForm";
import DisplayErrors from "../../Components/utils/DisplayErrors";

const GenreCreate = () => {
  const navigation = useNavigate();

  const [errors, setErrors] = useState([]);

  const create = async (genre) => {
    try {
      await axios.post(genresURL(), genre);
      navigation("/genres");
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <div className="te">
      <h3>Create Genre</h3>
      <DisplayErrors errors={errors} />
      <GenreForm
        initialValues={{ name: "" }}
        onSubmit={async (value) => {
          //Form Posted
          await create(value);
        }}
      />
    </div>
  );
};
export default GenreCreate;
