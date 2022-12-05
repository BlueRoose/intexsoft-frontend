import { useState, useEffect, createContext } from "react";
import * as userApi from "../api/user";
import {
  getSessionFromStorage,
  removeSessionFromStorage,
} from "../helpers/tokens";
import { removeUserFromStorage } from "../helpers/users";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

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
    const responce = await userApi.login(form);
    setUser(responce);
    setIsAuth(true);
};

  const logOut = () => {
    setIsAuth(false);
    removeSessionFromStorage();
    removeUserFromStorage();
  };

  const value = { isAuth, logIn, logOut, signUp, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
