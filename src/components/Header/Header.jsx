import { Link } from "react-router-dom";
import Input from "../Input/Input";
import RenderLinks from "../RenderLinks/RenderLinks";
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
          <RenderLinks />
        </div>
      </div>
    </div>
  );
}

export default Header;
