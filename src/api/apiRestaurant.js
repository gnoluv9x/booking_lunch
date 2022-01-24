import axiosClient from "./axiosClient";

const routes = "restaurants";

const RestaurantApi = {
    getAll: () => {
        const url = `/${routes}`;
        return axiosClient.get(url);
    },
    getByStatus: status => {
        const url = `/${routes}/${status}`;
        return axiosClient.get(url);
    },
    getByFilter: filters => {
        const url = `/${routes}?${filters}`;
        return axiosClient.get(url);
    },
    addRestaurant: data => {
        const url = `/${routes}`;
        return axiosClient.post(url, data);
    },
};

export default RestaurantApi;
