import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DisplayErrors from "./DisplayErrors";
import GenericLoading from "./GenericLoading";

const EditEntity = ({ url, entityName, children, indexURL = "/" }) => {
  let { id } = useParams();
  const navigation = useNavigate();
  const [entity, setEntity] = useState();
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`${url}/${id}`).then((res) => {
      console.log(res);
      setEntity(res.data.name);
    });
  }, [url, id]);

  const edit = async (entityToEdit) => {
    try {
      await axios.put(`${url}/${id}`, entityToEdit);
      navigation(indexURL);
    } catch (error) {
      if (error && error.response) setErrors(error.response.data);
    }
  };

  return (
    <div className="rr">
      <h3>Edit {entityName}</h3>
      <DisplayErrors errors={errors} />
      <GenericLoading data={entity}>{children(entity, edit)}</GenericLoading>
    </div>
  );
};
export default EditEntity;
