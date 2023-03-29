import axios from "axios";

const api = axios.create({
    baseURL: 'https://vast-red-pig-yoke.cyclic.app'
});

export default api;