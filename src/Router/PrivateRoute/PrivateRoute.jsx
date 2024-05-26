import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth() || {};
  console.log(location.pathname);

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to={"/login"} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
