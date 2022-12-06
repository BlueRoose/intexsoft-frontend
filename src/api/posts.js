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

export const like = async (postId) => {
  await request({
    url: "/like",
    method: "PUT",
    data: {
      postId,
    },
  });
};

export const dislike = async (postId) => {
  await request({
    url: "/dislike",
    method: "PUT",
    data: {
      postId,
    },
  });
};

export const comment = async (postId, text) => {
  await request({
    url: "/comment",
    method: "PUT",
    data: {
      postId,
      text,
    },
  });
};

export const getUserPosts = async (id) => {
  const responce = await request({
    url: `user/${id}`,
  });
  console.log(responce);
  return responce;
};
