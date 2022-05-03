import { storage } from './localStorage';

const CART_KEY = 'cart';

export const cartStorage = {
  set(cartDetails) {
    storage.set(CART_KEY, cartDetails);
  },
  delete() {
    storage.delete(CART_KEY);
  },
  get() {
    return storage.get(CART_KEY);
  },
};
