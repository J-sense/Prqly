import axios from "axios";

const axiosBaseApi = axios.create({
  baseURL: "https://server.dokploy.193-203-164-106.sslip.io/api", // change to your real URL
});

export default axiosBaseApi;
