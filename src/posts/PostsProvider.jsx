import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext(null);

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    // Получение постов при загрузке страницы
    useEffect(() => {

    }, []);

    const value = {posts, setPosts};

    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};