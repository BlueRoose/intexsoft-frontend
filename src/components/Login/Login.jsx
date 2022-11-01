import React from 'react';
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Login.module.scss";

function Login() {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    const alertUser = () => {
        const obj = {login: login, password: password};
        alert(obj.login + " " + obj.password);
        console.log(obj);
    }

    return (
        <div className={styles.login}>
            <h1>Intexgram</h1>
            <Input type="text" placeholder="Enter your login" set={setLogin}/>
            <Input type="password" placeholder="Enter your password" set={setPassword}/>
            <Button click={alertUser}>Login</Button>
        </div>
    );
}

export default Login;