import { useContext } from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { PostsContext } from "../../posts/PostsProvider";
import styles from "./Posts.module.scss";

function Posts() {
  const {posts, isLoading} = useContext(PostsContext);
  console.log(isLoading);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          {isLoading ? [...Array(8)].map((index) => {
            <Post key={index} nick="user" img={"gray.png"} description="" />;
          }) : posts.map(({ _id, body, postedBy }) => {
            return (
              <Post
                key={_id}
                nick={postedBy.name}
                img={"photo.jpg"}
                description={body}
              />
            );
          })}
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
}

export default Posts;
