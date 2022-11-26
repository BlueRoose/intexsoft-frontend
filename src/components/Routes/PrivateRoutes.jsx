import { Routes, Route } from "react-router-dom";
import Posts from "../../pages/Posts/Posts";
import Post from "../../pages/Post/Post";
import Home from "../../pages/Home/Home";
import CreatePost from "../../pages/CreatePost/CreatePost";
import RequireAuth from "../../auth/RequireAuth";

function PrivateRoutes() {

  return (
      <Routes>
        <Route element={<RequireAuth />}>
        <Route exact path="/posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/newpost" element={<CreatePost />} />
        </Route>
      </Routes>
  );
}

export default PrivateRoutes;
