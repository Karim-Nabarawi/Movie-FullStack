import React from "react";
import { genresURL } from "../../Api";
import IndexEntity from "../../Components/utils/IndexEntity";

const GenresMain = () => {
  return (
    <>
      <IndexEntity title="Genres" entityName="genre" url={genresURL()} createURL="/genres/create">
        {(genres, buttons) => (
          <>
            <thead>
              <tr>
                <th>Genre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {genres?.map((genre) => (
                <tr key={genre.id}>
                  <td>{genre.name}</td>
                  {buttons(`/genres/edit/${genre.id}`, genre.id)}
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </>
  );
};
export default GenresMain;
