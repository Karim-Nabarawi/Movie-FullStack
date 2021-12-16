import configureValidations from "./Components/forms/Validations";
import GlobalStyles from "./Components/GlobalStyles";
import Menu from "./Components/Menu";
import GetRoutes from "./routes.config";

function App() {
  configureValidations();
  return (
    <>
      <GlobalStyles />
      <Menu />
      <div className="container">
        <GetRoutes />
      </div>
    </>
  );
}

export default App;
