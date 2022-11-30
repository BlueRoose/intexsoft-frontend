import { useContext } from "react";
import { PostsContext } from "../posts/PostsProvider";
import { useParams } from "react-router-dom";

export function usePost() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  console.log(posts, id);
  return posts.find((post) => post._id === id);
}
