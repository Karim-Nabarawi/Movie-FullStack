import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

//Components
import { loadMovies } from "../actions/moviesAction";
import MovieList from "../Components/MovieList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  //Get the fetched data from Redux and assign it
  const { popular, upcoming } = useSelector((state) => state.movies);
  return (
    <HomeContainer>
      <h3>Popular</h3>
      <MovieList MoviesList={popular} />
      <h3>Upcoming Releases</h3>
      <MovieList MoviesList={upcoming} />
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.div`
  h3 {
    margin: 50px 0;
  }
`;
