import React from "react";
import styled from "styled-components";

const Movie = ({ movieData }) => {
  const buildLink = `/movie/${movieData.id}`;

  return (
    <MovieCard>
      <a href={buildLink}>
        <MovieImg src={movieData.poster} alt="Poster" />
      </a>
      <a href={buildLink}>
        <MovieTitle>{movieData.title}</MovieTitle>
      </a>
    </MovieCard>
  );
};
export default Movie;

const MovieCard = styled.div`
  margin-right: 2%;
  margin-bottom: 10px;
  text-align: center;
  a {
    text-decoration: none;
  }
`;

const MovieTitle = styled.p`
  height: 44px;
  font-size: 15px;
  font-weight: bold;
`;

const MovieImg = styled.img`
  width: 225px;
  height: 300px;
`;
