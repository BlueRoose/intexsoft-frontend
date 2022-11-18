import IconButton from "../IconButton/IconButton";
import styles from "./Post.module.scss";

function Post({
    nick, img, liked, description,
}) {
    return (
        <div className={styles.post}>
            <div className={styles.head}>
                <IconButton src="res/heart.png" alt="heart" />
                <h3>{nick}</h3>
            </div>
            <img width={470} height={587} src="res/photo.jpg" alt="ph" />
            <div className={styles.btns}>
                <IconButton className={styles.icon} src="res/heart.png" alt="heart" />
                <IconButton className={styles.icon} src="res/chat.png" alt="comment"/>
            </div>
            <div className={styles.description}>
                <p>
                    <b>egorzhuk._</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse 
                    quae odit delectus unde assumenda mollitia ea consectetur, labore aperiam, ducimus tot
                    am dolor quidem perspiciatis voluptate aliquid!
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