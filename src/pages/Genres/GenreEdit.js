import React from "react";
import { genresURL } from "../../Api";
import GenreForm from "../../Components/forms/GenreForm";
import EditEntity from "../../Components/utils/EditEntity";

const GenreEdit = () => {
  return (
    <div className="rr">
      <EditEntity url={genresURL()} entityName="Genre" indexURL="/genres">
        {(entity, edit) => (
          <GenreForm
            initialValues={{ name: entity }}
            onSubmit={async (value) => {
              await edit(value);
            }}
          />
        )}
      </EditEntity>
    </div>
  );
};
export default GenreEdit;
