import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.145.247.199/api/v1", // live Smart Chain API URL
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const storedToken = JSON.parse(window.localStorage.getItem("accessToken"));

  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken}` : null,
    },
  };
});

export default instance;
