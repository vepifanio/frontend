import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-vesp.herokuapp.com',
});

export default api;