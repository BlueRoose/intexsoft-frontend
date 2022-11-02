import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Login.module.scss";

function Login() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const alertUser = () => {
    const obj = { login: login, password: password };
    alert(obj.login + " " + obj.password);
    console.log(obj);
  };

  return (
    <div className={styles.login}>
      <img src="res/inst.jpg" alt="people" height={550} className={styles.insta} />
      <div className={styles.blocks}>
        <div className={styles.fields}>
          <h1>Intexgram</h1>
          <Input type="text" placeholder="Enter your login" set={setLogin} />
          <Input
            type="password"
            placeholder="Enter your password"
            set={setPassword}
          />
          <Button click={alertUser}>Login</Button>
        </div>
        <div className={styles.register}>
            <p>У Вас ещё нет аккаунта?</p>
            <p>Зарегистрироваться</p>
        </div>
        <p>Установите наше приложение</p>
        <div className={styles.badges}>
            <img src="res/google.png" alt="apple" className={styles.badge} />
            <img src="res/microsoft.png" alt="google" className={styles.badge} />
        </div>
      </div>
    </div>
  );
}

export default Login;
