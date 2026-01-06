import axios from "axios";

const axiosBaseApi = axios.create({
  baseURL: "http://10.10.13.27:8006/api", // change to your real URL
});

export default axiosBaseApi;
