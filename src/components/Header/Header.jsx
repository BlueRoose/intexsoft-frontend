import IconButton from "../IconButton/IconButton";
import Input from "../Input/Input";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Intexgram</h1>
        <Input
          type="text"
          name="search"
          placeholder="Поиск"
        />
        <div className={styles.btns}>
          <IconButton src="res/Home1.png" alt="home" />
          <IconButton src="res/Add.png" alt="add" />
          <IconButton src="res/heartHead.png" alt="heart" />
          <IconButton src="res/Add.png" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
