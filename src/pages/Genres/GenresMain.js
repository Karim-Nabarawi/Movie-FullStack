import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { genresURL } from "../../Api";

const GenresMain = () => {
  useEffect(() => {
    console.log(genresURL());
    axios.get(genresURL()).then((res) => {
      const data = res.data;
      console.log(data[0].name);
    });
  }, []);
  return (
    <>
      <h3>Genres</h3>
      <Link to="/genres/create" className="btn btn-primary">
        Create genre
      </Link>
    </>
  );
};
export default GenresMain;
