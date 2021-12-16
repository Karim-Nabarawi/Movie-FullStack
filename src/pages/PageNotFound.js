import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>404 Page not found</h1>
      <Link to="/" className="btn btn-primary">
        Go to home
      </Link>
    </>
  );
};
export default PageNotFound;
