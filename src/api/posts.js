import { request } from "./createRequest";

export const getPosts = async () => {
    const {posts} = await request({
        url: "/allpost",
        method: "GET",
    });
    return posts;
};