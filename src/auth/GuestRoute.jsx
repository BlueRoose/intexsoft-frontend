import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function GuestRoute({ children }) {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to="/posts" />;
  }
  return children;
}

export default GuestRoute;
