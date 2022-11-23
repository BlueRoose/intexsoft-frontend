import { Routes, Route, useParams } from "react-router-dom";
import RequireAuth from "../../auth/RequireAuth";
import Posts from "../../pages/Posts/Posts";
import Header from "../Header/Header";
import BigPost from "../BigPost/BigPost";

function PrivateRoutes() {
  const {id} = useParams();

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
        <Route exact path="posts/:id" element={<BigPost/>}/>
      </Routes>
    </>
  );
}

export default PrivateRoutes;
