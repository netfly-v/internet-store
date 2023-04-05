import axios from 'axios';

export const categoriesAPI = {
  getCategories() {
    return axios.get('https://fakestoreapi.com/products/categories').then((response) => response.data);
  },
};
