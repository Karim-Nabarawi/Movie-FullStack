import React from "react";
import { useParams } from "react-router";
import GenreForm from "../../Components/forms/GenreForm";

const GenreEdit = () => {
  let { id } = useParams();
  return (
    <div className="rr">
      <h3>Edit Genre {id}</h3>
      <GenreForm
        initialValues={{ name: id }}
        onSubmit={async (value) => {
          //Form Posted
          await new Promise((r) => setTimeout(r, 1));
          console.log(value);
        }}
      />
    </div>
  );
};
export default GenreEdit;
