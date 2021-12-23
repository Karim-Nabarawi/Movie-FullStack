import React from "react";
import { actorsURL } from "../../Api";
import { convertActorToFormData } from "../../Components/utils/formDataUtils";
import ActorForm from "../../Components/forms/ActorForm";
import EditEntity from "../../Components/utils/EditEntity";

const EditActor = () => {
  const transform = (actor) => {
    return {
      name: actor.name,
      dateOfBirth: new Date(actor.dateOfBirth),
      biography: actor.biography,
      pictureURL: actor.picture,
    };
  };

  return (
    <EditEntity url={actorsURL()} entityName="Actor" indexURL="/actors">
      {(entity, edit) => (
        <ActorForm
          initialValues={{
            name: entity.name,
            dateOfBirth: new Date(entity.dateOfBirth),
            biography: entity.biography,
            pictureURL: entity.picture,
          }}
          transform={transform}
          transformFormData={convertActorToFormData}
          onSubmit={async (values) => await edit(values)}
        />
      )}
    </EditEntity>
  );
};
export default EditActor;
