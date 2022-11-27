import { createContext, useState } from "react";

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [isMyPostsLoading, setIsMyPostsLoading] = useState(true);

  const value = { posts, myPosts, isPostsLoading, isMyPostsLoading, setPosts, setIsPostsLoading, setMyPosts, setIsMyPostsLoading };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
