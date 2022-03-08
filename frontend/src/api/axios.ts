import axios from 'axios';
import { loadProgressBar } from 'x-axios-progress-bar'
 
const axiosInstance = axios.create({
    baseURL: 'https://wkd.derock.dev/',
});

//@ts-ignore
loadProgressBar({}, axiosInstance);

export default axiosInstance;