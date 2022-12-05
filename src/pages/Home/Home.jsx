import { useContext } from "react";
import styles from "./Home.module.scss";
import { AuthContext } from "../../auth/AuthProvider";
import { PostsContext } from "../../posts/PostsProvider";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { getUserFromStorage } from "../../helpers/users";
import { useScroll } from "../../hooks/useScroll";

function MyPostsMapping() {
  const { myPosts, isMyPostsLoading } =
    useContext(PostsContext);
  const location = useLocation();

  useScroll();

  return (
    <>
      {isMyPostsLoading ? (
        <div className={styles.loader}></div>
      ) : (
        myPosts.map(({ item, _id, body, postedBy }) => {
          return (
            <Link to={"/posts/" + _id} state={{from: location}}>
              <img src="res/photo.png" alt="" width={293} height={293} />
            </Link>
          );
        })
      )}
    </>
  );
}

function Home() {
  const { logOut } = useContext(AuthContext);
  const user = JSON.parse(getUserFromStorage());

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.firstBlock}>
        <img className={styles.avatar} src="res/avatar.png" alt="avatar" />
        <div className={styles.info}>
          <div className={styles.nick}>
            <h3>{user.name}</h3>
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
        <div className={styles.logos}>
          <MyPostsMapping />
        </div>
      </div>
    </div>
  );
}

export default Home;
