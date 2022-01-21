import {Constants} from "../constants";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: Constants.baseUrl,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });

export default axiosInstance