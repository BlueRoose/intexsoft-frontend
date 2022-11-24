import { Routes, Route, useParams } from "react-router-dom";
import Posts from "../../pages/Posts/Posts";
import Header from "../Header/Header";
import BigPost from "../BigPost/BigPost";
import Home from "../../pages/Home/Home";

function PrivateRoutes() {
  const { id } = useParams();

  return (
      <>
      <Header />
      <Routes>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="posts/:id" element={<BigPost />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
      </>
  );
}

export default PrivateRoutes;
