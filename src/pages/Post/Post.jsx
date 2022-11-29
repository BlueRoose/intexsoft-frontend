import styles from "./Post.module.scss";
import IconButton from "../../components/IconButton/IconButton";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../posts/PostsProvider";
import photo from "../../res/photo.jpg";
import avatar from "../../res/avatar.png";
import like from "../../res/Heart0.svg";
import comment from "../../res/Comment.svg";
import cross from "../../res/cross.svg";

function Post() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <img className={styles.mainPhoto} src={photo} alt="mainphoto" />
        <div className={styles.info}>
          <div className={styles.head}>
            <div className={styles.user}>
              <IconButton src={avatar} alt="heart" />
              <h3>{post.postedBy.name}</h3>
            </div>
            <Link to="/posts">
              <img width={48} height={48} src={cross} alt="cross" />
            </Link>
          </div>
          <div className={styles.comments}></div>
          <div className={styles.buttons}>
            <IconButton className={styles.icon} src={like} alt="heart" />
            <IconButton className={styles.icon} src={comment} alt="comment" />
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

export default Post;
