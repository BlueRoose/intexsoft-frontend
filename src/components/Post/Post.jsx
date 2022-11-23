import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import styles from "./Post.module.scss";

function Post({ id, nick, img, description }) {
  return (
    <div className={styles.post}>
      <div className={styles.head}>
        <IconButton src="res/Heart0.svg" alt="heart" />
        <h3>{nick}</h3>
      </div>
      <div className={styles.photo}>
        <Link to={"/posts/" + id}>
          <img
            className={styles.mainPhoto}
            src={"res/" + img}
            alt="ph"
          />
        </Link>
      </div>
      <div className={styles.btns}>
        <IconButton className={styles.icon} src="res/Heart0.svg" alt="heart" />
        <IconButton
          className={styles.icon}
          src="res/Comment.svg"
          alt="comment"
        />
      </div>
      <div className={styles.description}>
        <p>
          <b>{nick + " "}</b>
          {description}
        </p>
      </div>
      <div className={styles.comment}>
        <textarea placeholder="Добавьте комментарий..."></textarea>
        <p>Опубликовать</p>
      </div>
    </div>
  );
}

export default Post;
