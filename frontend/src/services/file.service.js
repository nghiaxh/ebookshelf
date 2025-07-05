import axios from "axios";

const FileApiClient = (baseUrl) => {
  const fileApiClient = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  fileApiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("authticateToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return fileApiClient;
};

export default FileApiClient;
