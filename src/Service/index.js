import axios from "axios";

const api = axios.create({
    baseURL: 'http://18.204.216.124:3333'
});

export default api;