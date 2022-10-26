import axios from 'axios';

const gameApi = axios.create({
    baseURL: 'https://halloween-back-production.up.railway.app/api/',
});

export default gameApi;