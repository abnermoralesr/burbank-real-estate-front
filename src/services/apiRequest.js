import axios from "axios";

const apiRequest = axios.create({
    baseURL: import.meta.env.VITE_ROOT_URL + import.meta.env.VITE_API_PATH + import.meta.env.VITE_API_VERSION,
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    },
    params: {
      
    }
});

export default apiRequest;