import {CartType} from '../store/state/cart/types';
import {storage} from './localStorage';

const CART_KEY = 'cart';

export const cartStorage = {
  set(cartDetails: CartType) {
    storage.set(CART_KEY, cartDetails);
  },
  delete() {
    storage.delete(CART_KEY);
  },
  get() {
    return storage.get(CART_KEY);
  },
};
