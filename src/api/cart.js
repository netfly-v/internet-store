import axios from 'axios';

export const cartAPI = {
  set(cartId, userId, products) {
    return axios
      .put(`https://fakestoreapi.com/carts/${cartId}`, {
        userId,
        date: 2019 - 12 - 10,
        products,
      })
      .then(response => response.data);
  },
  order(userId, products) {
    return axios
      .post(`https://fakestoreapi.com/carts`, {
        userId,
        date: new Date(),
        products,
      })
      .then(response => response.data);
  },
};
