import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";
import { DEFAULT_URL } from "../common/baseURL";

const axiosClient = axios.create({
    baseURL: DEFAULT_URL,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: params => queryString.stringify(params),
});

// interceptor
axiosClient.interceptors.request.use(
    function (config) {
        //gắn token vào header của config
        const customHeader = {};
        const accessToken = Cookies.get("ACCESS_TOKEN"); // get token trong cookies
        // nếu có token thì thêm thuộc tính authorization vào headers
        if (accessToken) {
            customHeader.Authorization = accessToken;
        }
        return {
            ...config,
            headers: {
                ...customHeader, //dùng destructuring để thêm config vào header
                ...config.headers,
            },
        };
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    function (response) {
        console.log(response);
        if (response.status === 200) {
            Cookies.set("ACCESS_TOKEN", response.data.accessToken);
        }
        return response;
    },
    function (error) {
        //nếu code ngoài 2xx thì return error
        return Promise.reject(error);
    }
);
export default axiosClient;
