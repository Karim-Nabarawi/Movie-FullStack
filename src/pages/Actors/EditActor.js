import React from "react";
import ActorForm from "../../Components/forms/ActorForm";

const EditActor = () => {
  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm
        initialValues={{
          name: "Tom Holland",
          dateOfBirth: new Date("1996-06-01T00:00:00"),
          biography: "# **Hello**",
          pictureURL:
            "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
};
export default EditActor;
