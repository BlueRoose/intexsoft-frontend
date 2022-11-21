import styles from "./BigPost.module.scss";
import IconButton from "../IconButton/IconButton";

function BigPost({chosenPhoto, setOpened}) {
    return (
        <div className={styles.wrapper} onClick={() => setOpened(false)}>
            <div className={styles.content}>
            <div className={styles.post} onClick={(e) => e.stopPropagation()}>
            <img className={styles.mainPhoto}  src={"res/" + chosenPhoto.img} alt="mainphoto" />
            <div className={styles.info}>
                <div className={styles.head}>
                    <IconButton src="res/Heart0.svg" alt="heart" />
                    <h3>{chosenPhoto.nick}</h3>
                </div>
                <div className={styles.comments}>

                </div>
                <div className={styles.buttons}>
                    <IconButton className={styles.icon} src="res/Heart0.svg" alt="heart" />
                    <IconButton className={styles.icon} src="res/Comment.svg" alt="comment"/>
                </div>
                <div className={styles.comment}>
                    <textarea placeholder="Добавьте комментарий..."></textarea>
                    <p>Опубликовать</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default BigPost;