import { Routes, Route, useParams } from "react-router-dom";
import Posts from "../../pages/Posts/Posts";
import Header from "../Header/Header";
import BigPost from "../../pages/BigPost/BigPost";
import Home from "../../pages/Home/Home";
import CreatePost from "../../pages/CreatePost/CreatePost";

function PrivateRoutes() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="posts/:id" element={<BigPost />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/newpost" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default PrivateRoutes;
