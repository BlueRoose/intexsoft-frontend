import styles from "./Button.module.scss";

function Button({click, children}) {
    return (
        <button className={styles.button} onClick={() => click()}>{children}</button>
    );
}

export default Button;