import axios from "axios";

const api = axios.create({
  baseURL: "https://backendcar-ko7e.onrender.com"
});

export default api;