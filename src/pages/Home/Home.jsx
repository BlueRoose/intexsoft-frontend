import { useContext, useEffect } from "react";
import styles from "./Home.module.scss";
import { AuthContext } from "../../auth/AuthProvider";
import { PostsContext } from "../../posts/PostsProvider";
import { getMyPosts } from "../../api/posts";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function MyPostsMapping() {
  const { myPosts, isMyPostsLoading, setMyPosts, setIsMyPostsLoading } =
    useContext(PostsContext);

  useEffect(() => {
    getMyPosts().then((myPosts) => {
      setMyPosts(myPosts);
      setIsMyPostsLoading(false);
    });
  }, [setIsMyPostsLoading, setMyPosts]);

  return (
    <>
      {isMyPostsLoading ? (
        <div className={styles.loader}></div>
      ) : (
        myPosts.map(({ item, _id, body, postedBy }) => {
          return (
            <Link to={"/posts/" + _id}>
              <img src="res/avatar.png" alt="" width={293} height={293} />
            </Link>
          );
        })
      )}
    </>
  );
}

function Home() {
  const { logOut } = useContext(AuthContext);

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.firstBlock}>
        <img className={styles.avatar} src="res/avatar.png" alt="avatar" />
        <div className={styles.info}>
          <div className={styles.nick}>
            <h3>egorzhuk._</h3>
            <img
              onClick={() => logOut()}
              style={{ cursor: "pointer" }}
              src="res/logout.png"
              alt="logout"
            />
          </div>
          <div className={styles.stats}>
            <p>Публикации: 4</p>
            <p>Подписчики: 200</p>
            <p>Подписки: 244</p>
          </div>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <MyPostsMapping />
      </div>
    </div>
  );
}

export default Home;
