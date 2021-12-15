import { useRoutes } from "react-router-dom";
import GenreCreate from "./pages/Genres/GenreCreate";
import GenresOutlet from "./pages/Genres/GenresOutlet";
import GenresMain from "./pages/Genres/GenresMain";
import GenreEdit from "./pages/Genres/GenreEdit";
import Home from "./pages/Home";

const GetRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "genres/*",
      element: <GenresOutlet />,
      children: [
        { path: "", element: <GenresMain /> },
        { path: "create", element: <GenreCreate /> },
        { path: "edit", element: <GenreEdit /> },
      ],
    },
  ]);
  return routes;
};

export default GetRoutes;
