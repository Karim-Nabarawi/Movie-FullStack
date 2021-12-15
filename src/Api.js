//Base URL
const base_url = "http://api.themoviedb.org/3/movie/";

const popularMovies = `popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
const upComingMovies = `upcoming?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;

export const popularMoviesURL = () => `${base_url}${popularMovies}`;
export const upcomingMoviesURL = () => `${base_url}${upComingMovies}`;
