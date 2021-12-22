import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actorsURL } from "../../Api";
import ActorForm from "../../Components/forms/ActorForm";
import DisplayErrors from "../../Components/utils/DisplayErrors";
import { convertActorToFormData } from "../../Components/utils/formDataUtils";

const CreateActor = () => {
  const [errors, setErrors] = useState([]);
  const navigation = useNavigate();

  const create = async (actor) => {
    try {
      const configuration = {
        method: "post",
        url: actorsURL(),
        data: convertActorToFormData(actor),
        headers: { "Content-Type": "multipart/form-data" },
      };
      console.log(configuration.data);
      await axios(configuration);
      navigation("/actors");
    } catch (error) {
      if (error && error.response) setErrors(error.response.data);
    }
  };

  return (
    <>
      <h3>Create Actor</h3>
      <DisplayErrors errors={errors} />
      <ActorForm
        initialValues={{ name: "", dateOfBirth: undefined }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
};
export default CreateActor;
