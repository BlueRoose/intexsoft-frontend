import { useState } from "react";
import {like, dislike, comment } from "../api/posts";

function useActions({ post }) {
    const user = localStorage.getItem("user");
    const [liked, setLiked] = useState(post.likes.some(like => toString(like) === toString(user._id)));
    const [likes, setLikes] = useState(post.likes.length);
    const [comments, setComments] = useState(post.comments.length);

    const handleLike = async () => {
        if (!liked) {
            await like(post._id);
            setLikes(likes + 1);
        }
        else {
            await dislike(post._id);
            setLikes(likes - 1);
        }
        setLiked(!liked);
    };

    const addComment = async (text) => {
        await comment(post._id, text);
        setComments(comments + 1);
    };

    return { handleLike, addComment, liked, likes, comments };
};

export default useActions;