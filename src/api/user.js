import { addSessionToStorage } from "../helpers/tokens";
import { addUserToStorage } from "../helpers/users";
import { request } from "./createRequest";

// пример запроса авторизации
export const login = async ({ username, password }) => {
    const responce = await request({
      url: "/signin",
      method: "POST",
      data: {
        username,
        password,
      },
    });
    addSessionToStorage(responce.token);
    addUserToStorage(JSON.stringify(responce.user));
};

export const register = async ({ username, password, email, name }) => {
  await request({
    url: "/signup",
    method: "POST",
    data: {
      username,
      password,
      email,
      name,
    },
  });
  login({ username, password });
};
