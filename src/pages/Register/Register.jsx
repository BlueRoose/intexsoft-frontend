import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { register } from "../../api/user";
import {useAuth} from "../../hooks/useAuth";

function Register() {
  const [form, setForm] = React.useState({});
  const navigate = useNavigate();
  const {logIn} = useAuth();

  const handleChangeForm = ({ name, value }) =>
    setForm({ ...form, [name]: value });

  const saveUser = async () => {
    register(form);
    logIn(true, () => navigate("/posts", {replace: true}));
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
            placeholder="Введите адрес эл. почты"
            onChange={handleChangeForm}
          />
          <Input
            type="text"
            name="name"
            placeholder="Введите имя"
            onChange={handleChangeForm}
          />
          <Input
            type="text"
            name="username"
            placeholder="Введите логин"
            onChange={handleChangeForm}
          />
          <div className={styles.pass}>
            <PasswordInput onChange={handleChangeForm} />
          </div>
          <p className={styles.par}>
            Регистрируясь, вы принимаете наши Условия, Политику
            конфиденциальности и Политику в отношении файлов cookie.
          </p>
          <Button onClick={saveUser}>Зарегистрироваться</Button>
          <div className={styles.login}>
            <p>Уже есть аккаунт?</p>
            <Link to="/login" style={{ textDecoration: "none" }} exact>
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
