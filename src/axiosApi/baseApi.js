import axios from "axios";

const axiosBaseApi = axios.create({
  baseURL: "https://app.preqly.com/api", // change to your real URL
});

export default axiosBaseApi;
