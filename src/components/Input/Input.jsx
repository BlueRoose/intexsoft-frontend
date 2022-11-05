import styles from "./Input.module.scss";

function Input({type, name,  placeholder, handleChangeForm}) {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} onChange={(event) => {const value = event.target.value; handleChangeForm({name, value})}}></input>
    );
}

export default Input;