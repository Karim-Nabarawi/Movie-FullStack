import React from "react";
import ActorForm from "../../Components/forms/ActorForm";

const CreateActor = () => {
  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm initialValues={{ name: "", dateOfBirth: undefined }} onSubmit={(values) => console.log(values)} />
    </>
  );
};
export default CreateActor;
