import axiosClient from "../apiClient";

export function checkUser(data) {
    return axiosClient.post("/signin", data);
}

export function addUser(data) {
    return axiosClient.post("/signup", data);
}