import axios from "axios";
import { push } from "notivue";

const ApiClient = (baseUrl) => {
    const apiClient = axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    apiClient.interceptors.request.use((config) => {
        const token = localStorage.getItem("authenticateToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    apiClient.interceptors.response.use(response => response, error => {
        if (error.response && error.response.status === 401) {
            localStorage.clear();
            window.location.href = "/user/login";
            push.warning("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
        }
        return Promise.reject(error);
    });
    return apiClient;
};

export default ApiClient;