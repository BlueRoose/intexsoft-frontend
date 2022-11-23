import { Routes, Route } from "react-router-dom";
import RequireAuth from "../../auth/RequireAuth";
import Posts from "../../pages/Posts/Posts";
import Header from "../Header/Header";

function PrivateRoutes() {
  return (
    <>
    <Header />
      <Routes>
        <Route
          exact
          path="/posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default PrivateRoutes;
