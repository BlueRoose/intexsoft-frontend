import axios from "axios";
import { getSessionFromStorage } from "../helpers/tokens";

const axiosInstance = axios.create({
  baseURL: "https://backendick.herokuapp.com/",
});

export const request = async ({ headers = {}, method, url, data, params }) => {
  // получили токен
  const accessToken = getSessionFromStorage() || {};

  // если есть токен то добавили его в header
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  // формируем параметры запроса
  const options = {
    headers,
    method,
    data,
    params,
    url,
  };

  try {
    // выполняем запрос
    const result = await axiosInstance(options);

    return result.data;
  } catch (error) {
    alert(error);
    throw error;
  }
};
