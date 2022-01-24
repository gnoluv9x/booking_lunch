import axiosClient from "./apiConfig";

const BookingApi = {
    getAll: (params) => {
        const url = "/foodOrder"
        return axiosClient.get(url,{ params });
    },
    getAllRes: (params) => {
        const url = "/restaurant"
        return axiosClient.get(url,{ params });
    },
    getById: id => {
        const url = `/foodOrder${id}`;
        return axiosClient.get(url);
    },
    login: data => {
        const url = "/admin/staff";
        return axiosClient.post(url, data);
    },
    updateAccount: values => {
        const url = `/admin/staff/${values.id}`;
        return axiosClient.put(url, values.data);
    },
    rePassword: values => {
        const url = `/admin/staff/reset-password/${values.id}`;
        return axiosClient.put(url, values.data);
    },
};
export default BookingApi;
