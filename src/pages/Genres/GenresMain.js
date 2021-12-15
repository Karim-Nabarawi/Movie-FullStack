import React from "react";
import { Link } from "react-router-dom";

const GenresMain = () => {
  return (
    <>
      <Link to="/genres/create" className="btn btn-primary">
        Create genre
      </Link>
    </>
  );
};
export default GenresMain;
