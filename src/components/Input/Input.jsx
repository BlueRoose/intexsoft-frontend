import styles from "./Input.module.scss";

function Input({type, placeholder, set}) {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} onChange={(event) => set(event.target.value)}></input>
    );
}

export default Input;