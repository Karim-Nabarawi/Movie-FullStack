import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovies } from "./actions/moviesAction";
import Menu from "./Components/Menu";
import MovieList from "./Components/MovieList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  //Get the fetched data from Redux and assign it
  const { popular, upcoming } = useSelector((state) => state.movies);

  return (
    <>
      <Menu />
      <div className="container">
        <h3>Popular</h3>
        <MovieList MoviesList={popular} />
        <h3>Upcoming Releases</h3>
        <MovieList MoviesList={upcoming} />
      </div>
    </>
  );
}

export default App;
