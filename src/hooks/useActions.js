import { useState } from "react";
import {like, dislike, comment } from "../api/posts";

function useActions({ post }) {
    const user = localStorage.getItem("user");
    const [liked, setLiked] = useState(post.likes.some(like => toString(like) === toString(user._id)));
    const [likesAmount, setLikesAmount] = useState(post.likes.length);
    const [commentsAmount, setCommentsAmount] = useState(post.comments.length);

    const handleLike = async () => {
        if (!liked) {
            await like(post._id);
            setLikesAmount(likesAmount + 1);
        }
        else {
            await dislike(post._id);
            setLikesAmount(likesAmount - 1);
        }
        setLiked(!liked);
    };

    const addComment = async (text) => {
        await comment(post._id, text);
        setCommentsAmount(commentsAmount + 1);
    };

    return { handleLike, addComment, liked, likesAmount, commentsAmount };
};

export default useActions;