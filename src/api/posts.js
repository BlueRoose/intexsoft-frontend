import { request } from "./createRequest";

export const getPosts = async () => {
  const { posts } = await request({
    url: "/posts",
    method: "GET",
  });
  return posts;
};

export const addPost = async ({ body }) => {
  await request({
    url: "/createpost",
    method: "POST",
    data: {
      body,
    },
  });
};

export const getMyPosts = async () => {
  const { mypost } = await request({
    url: "/myposts",
    method: "GET",
  });
  return mypost;
};

export const deletePost = async (id) => {
  await request({
    url: "/deletepost/"+id,
    method: "DELETE",
  });
};
