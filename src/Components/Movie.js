import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ movieData }) => {
  const buildLink = `/movie/${movieData.id}`;

  return (
    <MovieCard>
      <Link to={buildLink}>
        <MovieImg src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="Poster" />
      </Link>
      <Link to={buildLink}>
        <MovieTitle>{movieData.title}</MovieTitle>
      </Link>
    </MovieCard>
  );
};
export default Movie;

const MovieCard = styled.div`
  margin-right: 2%;
  margin-bottom: 10px;
  text-align: center;
  width: 225px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: white;
  transition: 0.25s;
  transition-timing-function: ease-out;

  a {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6);
  }
`;

const MovieTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 15px;
  font-weight: bold;
  color: #010b26;
`;

const MovieImg = styled.img`
  width: 225px;
  height: 300px;
  border-radius: 10px 10px 0 0;
`;
