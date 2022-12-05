import { useContext } from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { useScroll } from "../../hooks/useScroll";
import { PostsContext } from "../../posts/PostsProvider";
import styles from "./Posts.module.scss";

function PostsMapping() {
  const { posts, isPostsLoading } = useContext(PostsContext);

  useScroll();

  return (
    <>
      {isPostsLoading ? (
        <div className={styles.loader}></div>
      ) : (
        posts.map((post, item) => {
          return (
            <Post
              key={item}
              post={post}
              img="photo.jpg"
            />
          );
        })
      )}
    </>
  );
}

function Posts() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.leftSide}></div>
        <PostsMapping />
        <div className={styles.rightSide}></div>
      </div>
    </>
  );
}

export default Posts;
