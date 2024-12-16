import axios from "axios";

const instance = axios.create({
  baseURL: "http://167.172.23.240:8000/",
  headers: { 
    "Content-Type": "application/json", 
    Accept: "application/json",
  }, 
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
