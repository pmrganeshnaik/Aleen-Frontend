import axios from 'axios';

const url = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";
const axiosInstance = axios.create({
  baseURL: url, // replace with your backend URL
  withCredentials: true,
});

export default axiosInstance;
