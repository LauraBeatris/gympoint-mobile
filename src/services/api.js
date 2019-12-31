import axios from 'axios';
import { IP_ADDRESS } from 'react-native-dotenv';

const api = axios.create({
  baseURL:
    `http://${IP_ADDRESS}:3333` || 'http://gympoint-api.lauradeveloper.com/br',
});

export default api;
