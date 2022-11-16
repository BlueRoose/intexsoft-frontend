import axiosInstance from "../apiClient";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export async function getSessionFromStorage(url, data) {
    try {
        const result = await axiosInstance.post(url, data);
        alert(result.data.token);
        console.log(result);
        return result.data.token;
    } catch (error) {
        console.log(error);
    }
}

const {accessToken} = getSessionFromStorage() || {};
console.log(accessToken);

if (accessToken) {
    axiosInstance.headers["Authorization"] = `Bearer ${accessToken}`;
}




// export function CheckUser(data) {
//     const {login} = useAuth();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const fromPage = location.state?.from?.pathname || "/";
    
//     return axiosClient.post("/signin", data).then(function(responce) {
//         localStorage.setItem("token", responce.data.token);
//         alert(responce.data.token);
//         login(true, () => navigate(fromPage, {replace: true}));
//       });
// }

// const token = localStorage.getItem("token");

// export function addUser(data) {
//     // createRequest({
//     //     url: "/signup",
//     //     data,
//     //     token,
//     // });

//     return axiosClient.post("/signup", data);
// }