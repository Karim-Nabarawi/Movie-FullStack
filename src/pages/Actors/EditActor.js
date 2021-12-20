import React from "react";
import ActorForm from "../../Components/forms/ActorForm";

const EditActor = () => {
  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm
        initialValues={{ name: "Tom Holland", dateOfBirth: new Date("1996-06-01T00:00:00") }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};
export default EditActor;
