import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const BASE_URL = 'https://cready-backend.onrender.com';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": `application/json`,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosClient.interceptors.request.use((config: any) => {
  config.headers["withCredentials"] = true;
  return config;
});

axiosClient.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: any) => {
    if (response.status === 200 && response.data) {
      return response.data;
    }

    return response;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ({ response }: any) => {
    if (response.status === 403 || response.status === 401) {
      localStorage.clear();
      cookies.remove("username");
      cookies.remove("role");
      cookies.remove("accessToken");
    } else {
      return Promise.reject(response);
    }
    
  },

);
export default axiosClient;
