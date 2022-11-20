import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import styles from "./Posts.module.scss";

function Posts() {
  

  const posts = [
    {
      nick: "egorzhuk._",
      img: "photo.jpg",
      liked: true,
      description: "love you guys",
    },
    {
      nick: "juicewrld",
      img: "photo.png",
      liked: true,
      description: "999",
    },
    {
      nick: "billgates",
      img: "car.png",
      liked: true,
      description: "Just beautiful winter morning",
    },
    {
      nick: "world_people",
      img: "girl.png",
      liked: true,
      description: "Our subscriber Polina",
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          {posts.map(({nick, img, liked, description}) => {
            return <Post key={nick} nick={nick} img={img} liked={liked} description={description} />;
          })}
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
}

export default Posts;
