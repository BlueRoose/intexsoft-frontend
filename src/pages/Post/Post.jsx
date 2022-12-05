import { useState } from "react";
import styles from "./Post.module.scss";
import IconButton from "../../components/IconButton/IconButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import photo from "../../res/photo.jpg";
import avatar from "../../res/avatar.png";
import like0 from "../../res/Heart0.svg";
import like1 from "../../res/redHeart.png";
import commente from "../../res/Comment.svg";
import cross from "../../res/cross.svg";
import { usePost } from "../../hooks/usePost";
import useActions from "../../hooks/useActions";
import Comment from "../../components/Comment/Comment";

function Post() {
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const post = usePost();
  const { handleLike, liked, likes, addComment, comments } = useActions({
    post,
  });

  const handleChangeForm = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    addComment(body);
    document.getElementById("textarea").value = "";
  };

  return (
    <div
      className={styles.wrapper}
      onClick={() =>
        navigate(location.state?.from?.pathname, { replace: true })
      }
    >
      <div className={styles.post} onClick={(event) => event.stopPropagation()}>
        <img className={styles.mainPhoto} src={photo} alt="mainphoto" />
        <div className={styles.info}>
          <div className={styles.head}>
            <div className={styles.user}>
              <IconButton src={avatar} alt="heart" />
              <h3>{post?.postedBy?.name}</h3>
            </div>
            <Link to={location.state?.from?.pathname}>
              <img width={48} height={48} src={cross} alt="cross" />
            </Link>
          </div>
          <div className={styles.comments}>
            {comments ? post?.comments?.map(comment => {
              return <Comment comment={comment}/>;
            }) : null}
          </div>
          <div className={styles.buttons}>
            <IconButton
              onClick={handleLike}
              id={post?._id}
              className={styles.icon}
              src={liked ? like1 : like0}
              alt="heart"
            />
            <IconButton
              onClick={addComment}
              id={post?._id}
              className={styles.icon}
              src={commente}
              alt="comment"
            />
          </div>
          {likes ? <p>{likes} отметок "Нравится"</p> : null}
          <div className={styles.comment}>
            <textarea
              placeholder="Добавьте комментарий..."
              onChange={(event) => handleChangeForm(event)}
              id="textarea"
            ></textarea>
            <p onClick={handleSubmit}>Опубликовать</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
