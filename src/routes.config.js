import { useRoutes } from "react-router-dom";
import GenreCreate from "./pages/Genres/GenreCreate";
import GenresMain from "./pages/Genres/GenresMain";
import GenreEdit from "./pages/Genres/GenreEdit";
import IndexActors from "./pages/Actors/IndexActors";
import CreateActor from "./pages/Actors/CreateActor";
import EditActor from "./pages/Actors/EditActor";
import IndexMovieTheaters from "./pages/MovieTheaters/IndexMovieTheaters";
import CreateMovieTheater from "./pages/MovieTheaters/CreateMovieTheater";
import EditMovieTheater from "./pages/MovieTheaters/EditMovieTheater";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import FilterMovies from "./pages/FilterMovies";

const GetRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "genres/",
      children: [
        { path: "", element: <GenresMain /> },
        { path: "create", element: <GenreCreate /> },
        { path: "edit/:id", element: <GenreEdit /> },
      ],
    },
    {
      path: "actors/",
      children: [
        { path: "", element: <IndexActors /> },
        { path: "create", element: <CreateActor /> },
        { path: "edit/:id", element: <EditActor /> },
      ],
    },
    {
      path: "movietheater/",
      children: [
        { path: "", element: <IndexMovieTheaters /> },
        { path: "create", element: <CreateMovieTheater /> },
        { path: "edit/:id", element: <EditMovieTheater /> },
      ],
    },
    { path: "search/", element: <FilterMovies /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return routes;
};

export default GetRoutes;
