import React from 'react';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false);

    const login = (flag, cb) => {
        setIsAuth(flag);
        cb();
    }

    const value = {isAuth, login};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}