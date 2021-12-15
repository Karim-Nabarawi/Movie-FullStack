import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MovieList = ({ MoviesList }) => {
  return (
    <MovieListContainer>
      {MoviesList.map((movieData) => (
        <Movie key={movieData.id} movieData={movieData} />
      ))}
    </MovieListContainer>
  );
};
export default MovieList;

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;
