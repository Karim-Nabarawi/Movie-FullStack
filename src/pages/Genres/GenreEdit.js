import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { genresURL } from "../../Api";
import GenreForm from "../../Components/forms/GenreForm";
import GenericLoading from "../../Components/utils/GenericLoading";
import DisplayErrors from "../../Components/utils/DisplayErrors";

const GenreEdit = () => {
  let { id } = useParams();
  const navigation = useNavigate();
  const [genre, setGenre] = useState();
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`${genresURL()}/${id}`).then((res) => {
      console.log(res);
      setGenre(res.data.name);
    });
  }, [id]);

  const edit = async (genreToEdit) => {
    try {
      await axios.put(`${genresURL()}/${id}`, genreToEdit);
      navigation("/genres");
    } catch (error) {
      if (error && error.response) setErrors(error.response.data);
    }
  };

  return (
    <div className="rr">
      <h3>Edit Genre {id}</h3>
      <DisplayErrors errors={errors} />
      <GenericLoading data={genre}>
        <GenreForm
          initialValues={{ name: genre }}
          onSubmit={async (value) => {
            await edit(value);
          }}
        />
      </GenericLoading>
    </div>
  );
};
export default GenreEdit;
