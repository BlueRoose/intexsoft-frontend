import React from "react";
import styles from "./Register.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [form, setForm] = React.useState({});
  const [showed, setShowed] = React.useState(false);

  const handleChangeForm = ({ name, value }) =>
    setForm({ ...form, [name]: value });

  const saveUser = () => {
    alert(JSON.stringify(form));
  };

  return (
    <div className={styles.register}>
      <div className={styles.logo}>
        <h1>Intexgram</h1>
        <p>5 миллионов счастливых пользователей по всему миру</p>
        <img width={256} height={256} src="res/planet.png" alt="planet" />
        <p>Стань частью нашего сообщества</p>
      </div>
      <div className={styles.fields}>
        <h3>Зарегистрируйся сейчас</h3>
        <div className={styles.inputs}>
          <Input
            type="text"
            name="email"
            placeholder="Enter your email"
            handleChangeForm={handleChangeForm}
          />
          <Input
            type="text"
            name="nameSurname"
            placeholder="Enter your login"
            handleChangeForm={handleChangeForm}
          />
          <Input
            type="text"
            name="username"
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
              <img
                onClick={() => setShowed(!showed)}
                width={32}
                height={32}
                src="res/hide.png"
                alt="show"
              />
            ) : (
              <img
                onClick={() => setShowed(!showed)}
                width={32}
                height={32}
                src="res/show.png"
                alt="hide"
              />
            )}
          </div>
          <p className={styles.par}>
            Регистрируясь, вы принимаете наши Условия, Политику
            конфиденциальности и Политику в отношении файлов cookie.
          </p>
          <Button onClick={saveUser}>Зарегистрироваться</Button>
          <div className={styles.login}>
            <p>Уже есть аккаунт?</p>
            <Link to="/login" style={{ textDecoration: 'none' }} exact>
              <p>Войдите</p>
            </Link>
          </div>
        </div>
        <div className={styles.badges}>
          <img src="res/google.png" alt="apple" className={styles.badge} />
          <img src="res/microsoft.png" alt="google" className={styles.badge} />
        </div>
      </div>
    </div>
  );
}

export default Register;
