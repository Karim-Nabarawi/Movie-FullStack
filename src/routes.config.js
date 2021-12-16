import { useRoutes } from "react-router-dom";
import GenreCreate from "./pages/Genres/GenreCreate";
import GenresMain from "./pages/Genres/GenresMain";
import GenreEdit from "./pages/Genres/GenreEdit";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

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
    { path: "*", element: <PageNotFound /> },
  ]);
  return routes;
};

export default GetRoutes;
