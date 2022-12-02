import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function GuestRoute() {
  const { isAuth } = useAuth();
  const location = useLocation();

  return !isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={location.state?.from?.pathname || "/posts"} state={{ from: location }} />
  );
}

export default GuestRoute;
