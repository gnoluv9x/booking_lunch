import axios from "axios";
import { DEFAULT_URL } from "../common/baseURL";
import { getToken } from "./Cookie";

const axiosClient = axios.create({
    baseURL: DEFAULT_URL,
    headers: {
        "content-type": "application/json",
    },
});

// Interceptors
axiosClient.interceptors.request.use(function (config) {
    config.headers = {
        "Content-Type": "application/json",
        Authorization: getToken("accessToken") ? `Bearer ${getToken("accessToken")}` : undefined,
    };
    return config;
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosClient;
