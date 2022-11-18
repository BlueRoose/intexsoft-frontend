import { request } from "./createRequest";

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
// const getPost = ({ login, password }) => {
//   const { posts } = request({
//     url: "/posts",
//   });

//   return posts;
// };
