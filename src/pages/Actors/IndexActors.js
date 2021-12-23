import React from "react";
import { actorsURL } from "../../Api";

import IndexEntity from "../../Components/utils/IndexEntity";

const IndexActors = () => {
  return (
    <IndexEntity url={actorsURL()} createURL="/actors/create" title="Actors" entityName="Actor">
      {(actors, buttons) => (
        <>
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {actors?.map((actor) => (
              <tr key={actor.id}>
                <td>{actor.name}</td>
                {buttons(`/actors/edit/${actor.id}`, actor.id)}
              </tr>
            ))}
          </tbody>
        </>
      )}
    </IndexEntity>
  );
};
export default IndexActors;
