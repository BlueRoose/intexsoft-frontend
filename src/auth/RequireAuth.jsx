import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RequireAuth() {
  const location = useLocation();
  const { isAuth } = useAuth();

  return(
    isAuth ? <Outlet/> : <Navigate to="/login"/>
);
}

export default RequireAuth;
