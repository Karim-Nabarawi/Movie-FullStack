import React from "react";
import { useParams } from "react-router";

const GenreEdit = () => {
  let { id } = useParams();
  return (
    <div className="rr">
      <h3>Edit Genre {id}</h3>
    </div>
  );
};
export default GenreEdit;
