import axios from "axios";

const api = axios.create({
    baseURL: "http://172.16.73.95:3000/"
})

export default api;