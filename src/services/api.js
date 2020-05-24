import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gympoint-api.lauradeveloper.com.br',
});

export default api;
