import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance
const axiosSecure = axios.create({
  baseURL: "https://foodcircle-live.vercel.app",
});

// Intercept requests to automatically attach JWT
axiosSecure.interceptors.request.use(
  (config) => {
    const token = Cookies.get("foodcircle-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosSecure;
