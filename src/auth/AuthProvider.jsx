import React from "react";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false);

    const logIn = (flag, cb) => {
        setIsAuth(flag);
        cb();
    };

    const logOut = (flag, cb) => {
        setIsAuth(flag);
        cb();
    };

    const value = {isAuth, logIn, logOut};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};