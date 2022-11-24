import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.firstBlock}>
                <img className={styles.avatar} src="res/avatar.png" alt="avatar" />
                <div className={styles.info}>
                    <div className={styles.nick}>
                        <h3>egorzhuk._</h3>
                        <img style={{cursor: "pointer"}} src="res/logout.png" alt="logout" />
                    </div>
                    <div className={styles.stats}>
                        <p>Публикации: 4</p>
                        <p>Подписчики: 200</p>
                        <p>Подписки: 244</p>
                    </div>
                </div>
            </div>
            <div className={styles.secondBlock}>

            </div>
        </div>
    );
}

export default Home;