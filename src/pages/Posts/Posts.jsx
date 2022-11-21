import { useContext, useState } from "react";
import BigPost from "../../components/BigPost/BigPost";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { PostsContext } from "../../posts/PostsProvider";
import styles from "./Posts.module.scss";

function Posts() {
  const { posts, isLoading } = useContext(PostsContext);
  const [opened, setOpened] = useState(false);
  const [chosenPhoto, setChosenPhoto] = useState({});

  function handleClick(object) {
    setChosenPhoto(object);
    setOpened(true);
  }

  return (
    <div>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.leftSide}>
            {isLoading
              ? [...Array(8)].map((index) => {
                  return (
                    <Post
                      key={index}
                      nick="user"
                      img={"gray.png"}
                      description=""
                    />
                  );
                })
              : posts.map(({ _id, body, postedBy }) => {
                  return (
                    <Post
                      key={_id}
                      nick={postedBy.name}
                      img={"photo.jpg"}
                      description={body}
                      handleClick={handleClick}
                    />
                  );
                })}
          </div>
          <div className={styles.rightSide}></div>
        </div>
      </div>
      {opened && <BigPost chosenPhoto={chosenPhoto} setOpened={setOpened} />}
    </div>
  );
}

export default Posts;
