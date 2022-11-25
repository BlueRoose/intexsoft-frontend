import { createContext, useEffect, useState } from "react";
import { getMyPosts, getPosts } from "../api/posts";

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Получение постов при загрузке страницы
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
    getMyPosts().then((myPosts) => {
      setMyPosts(myPosts);
      setIsLoading(false);
    });
  }, []);

  const value = { posts, myPosts, isLoading };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
