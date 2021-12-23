import React from "react";
import { genresURL } from "../../Api";
import GenreForm from "../../Components/forms/GenreForm";
import EditEntity from "../../Components/utils/EditEntity";

const GenreEdit = () => {
  return (
    <EditEntity url={genresURL()} entityName="Genre" indexURL="/genres">
      {(entity, edit) => (
        <GenreForm
          initialValues={{ name: entity.name }}
          onSubmit={async (value) => {
            await edit(value);
          }}
        />
      )}
    </EditEntity>
  );
};
export default GenreEdit;
