import axios from 'axios';


const gameApi = axios.create({
    baseURL: 'Api',
});

export default gameApi;