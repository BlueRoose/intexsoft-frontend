import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Login.module.scss";

function Login() {
  const [form, setForm] = React.useState({});
  const [showed, setShowed] = React.useState(false);

  const handleChangeForm = ({ name, value }) =>
    setForm({ ...form, [name]: value });

  const alertUser = () => {
    alert(JSON.stringify(form));
  };

  return (
    <div className={styles.login}>
      <img
        src="res/inst.jpg"
        alt="people"
        height={550}
        className={styles.insta}
      />
      <div className={styles.blocks}>
        <div className={styles.fields}>
          <h1>Intexgram</h1>
          <Input
            type="text"
            name="login"
            placeholder="Enter your login"
            handleChangeForm={handleChangeForm}
          />
          <div className={styles.pass}>
            <Input
              type={showed ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              handleChangeForm={handleChangeForm}
            />
            {showed ? (
              <img onClick={() => setShowed(!showed)} width={32} height={32} src="res/show.png" alt="show" />
            ) : (
              <img onClick={() => setShowed(!showed)} width={32} height={32} src="res/hide.png" alt="hide" />
            )}
          </div>
          <Button onClick={alertUser}>Login</Button>
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
