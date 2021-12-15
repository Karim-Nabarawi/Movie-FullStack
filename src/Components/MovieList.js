import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MovieList = ({ MoviesList }) => {
  console.log(MoviesList);
  if (MoviesList.length == 0)
    return <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="Loading" />;

  return (
    <MovieListContainer>
      {MoviesList && MoviesList.map((movieData) => <Movie key={movieData.id} movieData={movieData} />)}
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
