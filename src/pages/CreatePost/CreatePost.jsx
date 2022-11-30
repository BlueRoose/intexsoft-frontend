import IconButton from "../../components/IconButton/IconButton";
import styles from "./CreatePost.module.scss";
import { addPost } from "../../api/posts";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FileLoader from "../../components/FileLoader/FileLoader";

function CreatePost() {
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const handleChangeForm = (name, e) => {
    setBody({ ...body, [name]: e.target.value});
  };

  const addNewPost = async () => {
    try {
      await addPost(body);
      alert("Успех!");
      navigate("/posts", {});
    } catch (error) {}
  };

  return (
    <div className={styles.wrapper} onClick={() => navigate("/posts", { replace: true })}>
      <div className={styles.createPost} onClick={(event) => event.stopPropagation()}>
        <div className={styles.header}>
          <Link to="/posts">
            <img
              width={32}
              height={32}
              style={{ cursor: "pointer" }}
              src="res/arrow.png"
              alt="back"
            />
          </Link>
          <h3>Создание публикации</h3>
          <p onClick={addNewPost}>Поделиться</p>
        </div>
        <div className={styles.content}>
            <FileLoader />
          <div className={styles.info}>
            <div className={styles.user}>
              <IconButton src="res/avatar.png" alt="profile" />
              <h3>egorzhuk._</h3>
            </div>
            <div className={styles.description}>
              <textarea
                name="body"
                placeholder="Добавьте подпись..."
                onChange={event => handleChangeForm("body", event)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
