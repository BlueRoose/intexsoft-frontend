import { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { PostsContext } from "../../posts/PostsProvider";
import styles from "./Posts.module.scss";

function PostsMapping() {
  const { posts, isLoading } = useContext(PostsContext);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        posts.map(({ item, _id, body, postedBy }) => {
          return (
            <Post
              key={item}
              id={_id}
              nick={postedBy.name}
              img={"photo.jpg"}
              description={body}
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
