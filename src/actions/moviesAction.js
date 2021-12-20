import axios from "axios";
import { popularMoviesURL, upcomingMoviesURL } from "../Api";

export const loadMovies = () => async (dispatch) => {
  const popularData = await axios.get(popularMoviesURL());
  const upcomingData = await axios.get(upcomingMoviesURL());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};
