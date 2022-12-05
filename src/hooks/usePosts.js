import { useContext } from "react";
import { PostsContext } from "../posts/PostsProvider";

export function usePosts() {
  return useContext(PostsContext);
}
