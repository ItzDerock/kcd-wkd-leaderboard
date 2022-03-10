import axios from 'axios';
import { loadProgressBar } from 'x-axios-progress-bar'
 
const axiosInstance = axios.create({
    // baseURL: 'https://wkd.derock.dev/',
    baseURL: 'http://localhost:8000/'
});

//@ts-ignore
loadProgressBar({}, axiosInstance);

export default axiosInstance;