import axios from 'axios';
import { API_URL } from 'utils/consts';

export const ordersAPI = {
  getOrders(userId) {
    return axios.get(`${API_URL}/carts/user/${userId}`).then(response => response.data);
  },
};
