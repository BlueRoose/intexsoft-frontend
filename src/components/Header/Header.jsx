import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import Input from "../Input/Input";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link style={{ all: "initial", cursor: "pointer" }} to="/posts">
          <h1>Intexgram</h1>
        </Link>
        <Input type="text" name="search" placeholder="Поиск" />
        <div className={styles.btns}>
          <IconButton src="res/Home0.svg" alt="home" />
          <IconButton src="res/Add.svg" alt="add" />
          <IconButton src="res/Heart0.svg" alt="heart" />
          <IconButton src="res/Add.svg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
