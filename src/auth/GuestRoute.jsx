import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function GuestRoute({ children }) {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (isAuth) {
    return <Navigate to={location.state?.from?.pathname || "/posts"} />;
  }
  return children;
}

export default GuestRoute;
