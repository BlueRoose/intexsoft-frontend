import styles from "./Post.module.scss";
import IconButton from "../../components/IconButton/IconButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import photo from "../../res/photo.jpg";
import avatar from "../../res/avatar.png";
import like from "../../res/Heart0.svg";
import comment from "../../res/Comment.svg";
import cross from "../../res/cross.svg";
import { usePost } from "../../hooks/usePost";

function Post() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state?.from?.pathname);
  const post = usePost(); 

  return (
    <div className={styles.wrapper} onClick={() => navigate(location.state?.from?.pathname, { replace: true })}>
      <div className={styles.post} onClick={(event) => event.stopPropagation()}>
        <img className={styles.mainPhoto} src={photo} alt="mainphoto" />
        <div className={styles.info}>
          <div className={styles.head}>
            <div className={styles.user}>
              <IconButton src={avatar} alt="heart" />
              <h3>{post?.postedBy?.name}</h3>
            </div>
            <Link to={location.state?.from?.pathname} >
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
