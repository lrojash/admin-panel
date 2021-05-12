import axios from 'axios';
const ApiClient = axios.create({ baseURL: 'http://localhost:8001/api' });

ApiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        // console.log('inside api client', token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => Promise.reject(err)
)

export default ApiClient;