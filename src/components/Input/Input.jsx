import styles from "./Input.module.scss";

function Input({ type, name, placeholder, onChange }) {
  function handleChange(event) {
    const value = event.target.value;
    onChange({ name, value });
  }

  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={(event) => {
        handleChange(event);
      }}
    ></input>
  );
}

export default Input;
