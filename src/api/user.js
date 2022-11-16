import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const getSessionFromStorage = () => localStorage.getItem("token");

// фабрика создания запросов
export const request = async ({
  headers = {},
  method = "POST",
  url,
  data,
  params,
}) => {
  // получили токен
  const { accessToken } = getSessionFromStorage() || {};

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
    console.error(error);
    throw error;
  }
};

// пример запроса авторизации
export const login = async ({ username, password}) => {
  const token = await request({
    url: "/signin",
    data: {
      username,
      password,
    },
  });
  localStorage.setItem("token", token);
};

export const register = async ({ username, password, email, name}) => {
  await request({
    url: "/signup",
    data: {
      username,
      password,
      email,
      name,
    },
  });
  login({username, password});
};

// пример запроса получения постов
const getPost = ({ login, password }) => {
  const { posts } = request({
    url: "/posts",
  });

  return posts;
};
