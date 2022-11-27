import { useState, useEffect, createContext } from "react";
import * as userApi from "../api/user";
import {
  getSessionFromStorage,
  removeSessionFromStorage,
} from "../helpers/tokens";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const accessToken = getSessionFromStorage() || false;
    if (accessToken) {
      setIsAuth(true);
    }
  }, [setIsAuth]);

  const signUp = async (form) => {
    await userApi.register(form);
    setIsAuth(true);
  };

  const logIn = async (form) => {
    await userApi.login(form);
    setIsAuth(true);
  };

  const logOut = () => {
    setIsAuth(false);
    removeSessionFromStorage();
  };

  const value = { isAuth, logIn, logOut, signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
