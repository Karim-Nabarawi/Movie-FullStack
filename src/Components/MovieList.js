import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MovieList = ({ MoviesList }) => {
  console.log(MoviesList);
  if (MoviesList.length === 0)
    return <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="Loading" />;

  return (
    <MovieListContainer>
      {MoviesList && MoviesList.map((movieData) => <Movie key={movieData.id} movieData={movieData} />)}
    </MovieListContainer>
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
