import { createContext, useEffect, useState } from "react";
import { getPosts } from "../api/posts";

export const PostsContext = createContext(null);

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    // Получение постов при загрузке страницы
    useEffect(() => {
        setPosts(getPosts());
    }, []);

    const value = {posts, setPosts};

    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};