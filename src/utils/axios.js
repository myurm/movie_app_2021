import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: "http://yts-proxy.now.sh/list_movies.json",
    timeout: 3000,
});

export default axiosInstance;