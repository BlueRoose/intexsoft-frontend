import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Login.module.scss";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { login } from "../../api/user";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const [form, setForm] = React.useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const {logIn} = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleChangeForm = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleCheckUser = async () => {
    try {
      login(form);
      logIn(true, () => navigate(fromPage, {replace: true}));
    } catch (error) {
      alert("Ошибка входа в аккаунт!");
    }
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
            name="username"
            placeholder="Введите логин"
            onChange={handleChangeForm}
          />
          <div className={styles.pass}>
            <PasswordInput onChange={handleChangeForm} />
          </div>
          <Link to="/posts"><Button onClick={handleCheckUser}>Login</Button></Link>
        </div>
        <div className={styles.register}>
          <p>У Вас ещё нет аккаунта?</p>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <p>Зарегистрироваться</p>
          </Link>
        </div>
        <p className={styles.app}>Установите наше приложение</p>
        <div className={styles.badges}>
          <img src="res/google.png" alt="apple" className={styles.badge} />
          <img src="res/microsoft.png" alt="google" className={styles.badge} />
        </div>
      </div>
    </div>
  );
}

export default Login;
