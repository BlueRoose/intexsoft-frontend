import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RequireAuth({ children }) {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
