import axios from "axios";

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

    return apiClient;
};

export default ApiClient;
