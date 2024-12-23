import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.150.151.236:8000',
  timeout: 5000,
  
});

export default axiosInstance;