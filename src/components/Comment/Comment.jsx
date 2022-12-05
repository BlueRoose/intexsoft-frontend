import styles from "./Comment.module.scss";
import ava from "../../res/avatar.png";
import IconButton from "../IconButton/IconButton";

function Comment({comment}) {
    return (
        <div className={styles.comment}>
            <IconButton src={ava} alt="ava" />
            <span><b>{comment?.postedBy.name + " "}</b>{comment.text}</span>
        </div>
    );
}

export default Comment;