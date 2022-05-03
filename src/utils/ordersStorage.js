import { storage } from './localStorage';

const ORDERS_KEY = 'orders';

export const ordersStorage = {
  set(ordersDetails) {
    storage.set(ORDERS_KEY, ordersDetails);
  },
  delete() {
    storage.delete(ORDERS_KEY);
  },
  get() {
    return storage.get(ORDERS_KEY);
  },
};
