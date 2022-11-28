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
          <Link to="/posts">
            <IconButton src="res/Home0.svg" alt="home" />
          </Link>
          <Link to="/newpost">
            <IconButton src="res/Add.svg" alt="add" />
          </Link>
          <IconButton src="res/Heart0.svg" alt="heart" />
          <Link to="/home">
            <IconButton src="res/avatar.png" alt="profile" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
