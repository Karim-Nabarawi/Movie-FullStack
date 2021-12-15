import React from "react";
import { Outlet } from "react-router-dom";

const GenresOutlet = () => {
  return (
    <div className="temp">
      <h3>Genres</h3>
      <Outlet />
    </div>
  );
};
export default GenresOutlet;
