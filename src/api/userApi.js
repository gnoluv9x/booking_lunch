import axiosClient from "./axiosClient";
const userApi = {
  register(data) {
    const url = "";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/login";
    return axiosClient.post(url, data);
  },
  forgotPassword(data) {
    const url = "";
    return axiosClient.post(url, data);
  },
  retypePassword(data) {
    const url = "";
    return axiosClient.post(url, data);
  },
};
export default userApi;
