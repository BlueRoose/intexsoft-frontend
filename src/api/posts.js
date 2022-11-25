import { request } from "./createRequest";

export const getPosts = async () => {
  const { posts } = await request({
    url: "/allpost",
    method: "GET",
  });
  return posts;
};

export const addPost = async ({body}) => {
  await request({
    url: "/createpost",
    method: "POST",
    data: {
      body,
    },
  });
};
