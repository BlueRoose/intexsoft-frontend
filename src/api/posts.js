import { request } from "./createRequest";

export const getPosts = async () => {
    const responce = await request({
        url: "/allpost",
        method: "GET",
    });
    return responce.posts;
};