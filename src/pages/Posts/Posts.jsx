import { useContext, useState } from "react";
import Post from "../../components/Post/Post";
import { PostsContext } from "../../posts/PostsProvider";
import styles from "./Posts.module.scss";

function PostsMapping() {
  const { posts, isLoading } = useContext(PostsContext);
  const [opened, setOpened] = useState(false);
  const [chosenPhoto, setChosenPhoto] = useState({});

  function handleClick(object) {
    setChosenPhoto(object);
    setOpened(true);
  }

  return (
    <>
      {isLoading
        ? [...Array(8)].map((index) => {
            return (
              <Post key={index} nick="user" img={"gray.png"} description="" />
            );
          })
        : posts.map(({ item, _id,  body, postedBy }) => {
            return (
              <Post
                key={item}
                id={_id}
                nick={postedBy.name}
                img={"photo.jpg"}
                description={body}
                handleClick={handleClick}
              />
            );
          })}
    </>
  );
}

function Posts() {
  return (
    <div>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.leftSide}></div>
          <PostsMapping />
          <div className={styles.rightSide}></div>
        </div>
      </div>
      {/* {opened && <BigPost chosenPhoto={chosenPhoto} setOpened={setOpened} />} */}
    </div>
  );
}

export default Posts;
