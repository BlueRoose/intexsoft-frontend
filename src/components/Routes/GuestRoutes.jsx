import { Routes, Route, Navigate } from "react-router-dom";
import GuestRoute from "../../auth/GuestRoute";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

function GuestRoutes() {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route
          exact
          path="/"
          element={<Navigate to="/login" replace={true} />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default GuestRoutes;
