import { request } from "./createRequest";

export const getPosts = async ({user}) => {
    const responce = await request({
        url: "/posts",
        data: {
            user,
        },
    });
    return responce.posts;
};