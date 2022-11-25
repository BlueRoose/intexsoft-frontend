import { Routes, Route, Navigate } from "react-router-dom";
import GuestRoute from "../../auth/GuestRoute";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

function GuestRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace={true} />} />
      <Route
        exact
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        exact
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />
    </Routes>
  );
}

export default GuestRoutes;
