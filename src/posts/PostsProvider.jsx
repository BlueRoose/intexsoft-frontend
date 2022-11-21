import { createContext, useEffect, useState } from "react";
import { getPosts } from "../api/posts";

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Получение постов при загрузке страницы
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, []);

  const value = {posts, isLoading};

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
