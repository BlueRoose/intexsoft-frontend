import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import styles from "./Posts.module.scss";

function Posts() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className={styles.rightSide}>

                </div>
            </div>
        </div>
    );
}

export default Posts;