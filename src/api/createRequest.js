import axios from "axios";
import { getSessionFromStorage } from "../helpers/tokens";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
  });

  export const request = async ({
    headers = {},
    method = "POST",
    url,
    data,
    params,
  }) => {
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
      
      return result.data.token;
    } catch (error) {
      alert(error);
      throw error;
    }
  };