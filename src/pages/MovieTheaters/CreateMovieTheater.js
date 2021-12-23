import React from "react";
import MovieTheaterForm from "../../Components/forms/MovieTheaterForm";

const CreateMovieTheater = () => {
  return (
    <>
      <h3>Create Movie Theater</h3>
      <MovieTheaterForm initialValues={{ name: "" }} onSubmit={(values) => console.log(values)} />
    </>
  );
};
export default CreateMovieTheater;
