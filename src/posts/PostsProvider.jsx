import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosts, getMyPosts, getUserPosts } from "../api/posts";

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [isMyPostsLoading, setIsMyPostsLoading] = useState(true);
  const [postWasAdded, setPostWasAdded] = useState(false);
  const [userPosts, setUserPosts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setIsPostsLoading(false);
    });
    getMyPosts().then((myPosts) => {
      setMyPosts(myPosts);
      setIsMyPostsLoading(false);
    });
    setPostWasAdded(false);
  }, [setPosts, setMyPosts, postWasAdded]);

  useEffect(() => {
    getUserPosts(id).then((usPosts) => {
      setUserPosts(usPosts);
    });
  }, [id, setUserPosts]);


  const value = {
    posts,
    myPosts,
    userPosts,
    isPostsLoading,
    isMyPostsLoading,
    setPosts,
    setIsPostsLoading,
    setMyPosts,
    setIsMyPostsLoading,
    setPostWasAdded,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
