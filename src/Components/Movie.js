import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ movieData }) => {
  const buildLink = `/movie/${movieData.id}`;

  return (
    <MovieCard>
      <NavLink to={buildLink}>
        <MovieImg src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="Poster" />
      </NavLink>
      <NavLink to={buildLink}>
        <MovieTitle>{movieData.title}</MovieTitle>
      </NavLink>
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
