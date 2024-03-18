import { Modal } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import queryString from "query-string";
import { AXIOS_TIMEOUT_REQUEST, STORAGE_KEYS } from "../Common/Constant";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: AXIOS_TIMEOUT_REQUEST,
  paramsSerializer: (params) => queryString.stringify(params),
});

// config request
axiosConfig.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
// config response
axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error responses here
    Modal.error({
      title: "Error",
      content:
        error?.response?.data?.message ||
        "Something went wrong. Please try again.",
    });

    return Promise.reject(error);
  }
);

export default axiosConfig;
