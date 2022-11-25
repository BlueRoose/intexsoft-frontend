import styles from "./BigPost.module.scss";
import IconButton from "../../components/IconButton/IconButton";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../posts/PostsProvider";

function BigPost() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <img className={styles.mainPhoto} src="res/photo.jpg" alt="mainphoto" />
        <div className={styles.info}>
          <div className={styles.head}>
            <IconButton src="res/Heart0.svg" alt="heart" />
            <h3>{post.postedBy.name}</h3>
          </div>
          <div className={styles.comments}></div>
          <div className={styles.buttons}>
            <IconButton
              className={styles.icon}
              src="res/Heart0.svg"
              alt="heart"
            />
            <IconButton
              className={styles.icon}
              src="res/Comment.svg"
              alt="comment"
            />
          </div>
          <div className={styles.comment}>
            <textarea placeholder="Добавьте комментарий..."></textarea>
            <p>Опубликовать</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigPost;
