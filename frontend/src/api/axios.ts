import axios from 'axios';
import { loadProgressBar } from 'x-axios-progress-bar'
 
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

//@ts-ignore
loadProgressBar({}, axiosInstance);

export default axiosInstance;