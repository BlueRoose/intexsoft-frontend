import React from "react";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [user, setUser] = React.useState({});

    const login = (flag, cb) => {
        setIsAuth(flag);
        cb();
    };

    const logout = (flag, cb) => {
        setIsAuth(flag);
        cb();
    };

    const value = {isAuth, login, logout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};