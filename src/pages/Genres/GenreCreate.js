import React from "react";
import GenreForm from "../../Components/forms/GenreForm";

const GenreCreate = () => {
  return (
    <div className="te">
      <h3>Create Genre</h3>
      <GenreForm
        initialValues={{ name: "" }}
        onSubmit={async (value) => {
          //Form Posted
          await new Promise((r) => setTimeout(r, 1));
          console.log(value);
        }}
      />
    </div>
  );
};
export default GenreCreate;
