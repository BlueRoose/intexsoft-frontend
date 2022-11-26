import { createContext, useEffect, useState } from "react";
import { getMyPosts, getPosts } from "../api/posts";

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [isMyPostsLoading, setIsMyPostsLoading] = useState(true);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setIsPostsLoading(false);
    });
    getMyPosts().then((myPosts) => {
      setMyPosts(myPosts);
      setIsMyPostsLoading(false);
    });
  }, [setPosts, setIsPostsLoading, setMyPosts, setIsMyPostsLoading]);

  const value = { posts, myPosts, isPostsLoading, isMyPostsLoading };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
