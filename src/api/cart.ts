import axios from 'axios';
import {CartType} from '../store/state/cart/types';
import {Product} from '../store/state/products/types';

export const cartAPI = {
  set({cartId, userId, products}: CartType) {
    return axios
      .put(`https://fakestoreapi.com/carts/${cartId}`, {
        userId,
        date: 2019 - 12 - 10,
        products,
      })
      .then((response) => response.data);
  },
  order(userId: number, products: Product[]) {
    return axios
      .post(`https://fakestoreapi.com/carts`, {
        userId,
        date: new Date(),
        products,
      })
      .then((response) => response.data);
  },
};
