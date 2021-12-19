import React from "react";
import styled from "styled-components";
import Movie from "./Movie";
import GenericLoading from "./utils/GenericLoading";

const MovieList = ({ MoviesList }) => {
  return (
    <GenericLoading data={MoviesList}>
      <MovieListContainer>
        {MoviesList && MoviesList.map((movieData) => <Movie key={movieData.id} movieData={movieData} />)}
      </MovieListContainer>
    </GenericLoading>
  );
};
export default MovieList;

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  justify-content: center;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  align-items: center;
`;
