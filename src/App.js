import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles";
import Menu from "./Components/Menu";

import routes from "./routes.config";

function App() {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <div className="container">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />}></Route>
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
