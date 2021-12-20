import { Form, Formik } from "formik";
import React from "react";

const FilterMovies = () => {
  const initialValues = {
    title: "",
    genreId: 0,
  };

  const genres = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Action" },
  ];

  return (
    <div className="gg">
      <h3>Filter Movies</h3>
      <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
        {(props) => (
          <Form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title of the movie"
                  {...props.getFieldProps("title")}
                />
              </div>
              <div className="col-auto">
                <select className="form-select" {...props.getFieldProps("genreId")}>
                  <option value="0">--Choose a genre--</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary" type="submit" onClick={() => props.submitForm()}>
                  Search
                </button>
                <button className="btn btn-danger ms-3" onClick={() => props.setValues(initialValues)}>
                  Clear
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FilterMovies;
