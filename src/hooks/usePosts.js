import { useContext } from "react";
import { PostsContext } from "../posts/PostsProvider";

export function useAuth() {
  return useContext(PostsContext);
}