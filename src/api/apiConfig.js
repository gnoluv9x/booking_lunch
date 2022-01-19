import axios from "axios";
import queryString from "query-string";

const baseApi = "localhost";

const axiosClient = axios.create({
    baseURL: baseApi,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
    // Handle token here ...

    return config;
});

axiosClient.interceptors.response.use(
    response => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    error => {
        // Handle errors
        throw error;
    }
);

export default axiosClient;
