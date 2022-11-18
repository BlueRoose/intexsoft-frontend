import React, { useEffect } from "react";
import {login, register} from "../api/user";
import { getSessionFromStorage } from "../helpers/tokens";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false);
    
    useEffect(() => {
        const accessToken = getSessionFromStorage() || {};
        if (accessToken) {
            setIsAuth(true);
        }
    }, []);

    const reg = async (form) => {
        await register(form);
        setIsAuth(true);
    };

    const logIn = async (form) => {
        await login(form);
        setIsAuth(true);
    };

    const logOut = (cb) => {
        setIsAuth(false);
        cb();
    };

    const value = {isAuth, logIn, logOut, reg};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};