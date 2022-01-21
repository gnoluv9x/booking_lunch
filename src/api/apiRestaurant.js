import axiosClient from "./axiosClient";

const RestaurantApi = {
    getAll: () => {
        const url = "/restaurants";
        return axiosClient.get(url);
    },
    getByStatus: status => {
        const url = `/restaurants/status/${status}`;
        return axiosClient.get(url);
    },
    getByName: value => {
        const url = `/restaurants/name/:${value}`;
        return axiosClient.get(url);
    },
    addRestaurant: data => {
        const url = `/restaurants`;
        return axiosClient.post(url, data);
    },
};

export default RestaurantApi;
