import axios from 'axios';
import {API_URL} from '../utils/consts';

export const productsAPI = {
  getAllProducts(category?: string) {
    return axios.get(`${API_URL}/products${category ? `/category/${category}` : ''}`).then((response) => response.data);
  },
  getProduct(id: string) {
    return axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => response.data);
  },
};
