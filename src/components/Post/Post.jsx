import { Link, useLocation } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import styles from "./Post.module.scss";
import useActions from "../../hooks/useActions";
import { useState } from "react";

function Post({ post, img }) {
  const [body, setBody] = useState("");
  const location = useLocation();
  const { handleLike, liked, likesAmount, addComment, commentsAmount } = useActions({ post });

  const handleChangeForm = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className={styles.post}>
      <div className={styles.head}>
        <IconButton src="res/Heart0.svg" alt="heart" />
        <h3>{post?.postedBy?.name}</h3>
      </div>
      <div className={styles.photo}>
        <Link to={"/posts/" + post?._id} state={{from: location}}>
          <img className={styles.mainPhoto} src={"res/" + img} alt="ph" />
        </Link>
      </div>
      <div className={styles.btns}>
        <IconButton onClick={handleLike} id={post?._id} className={styles.icon} src={liked ? "res/redHeart.png" : "res/Heart0.svg"} alt="heart" />
        <IconButton
          onClick={addComment}
          className={styles.icon}
          src="res/Comment.svg"
          alt="comment"
        />
        {likesAmount ? <p className={styles.likes}>{likesAmount} отметок "Нравится"</p> : null}
      </div>
      <div className={styles.description}>
        <span>
          <b>{post?.postedBy?.name + " "}</b>
          {post?.body}
        </span>
      </div>
      {commentsAmount ? <p className={styles.comments}>Смотреть все комментарии ({commentsAmount})</p> : null}
      <div className={styles.comment}>
        <textarea placeholder="Добавьте комментарий..." onChange={(event) => handleChangeForm(event)}></textarea>
        <p onClick={() => addComment(body)}>Опубликовать</p>
      </div>
    </div>
  );
}

export default Post;
