import {OrderType} from '../store/state/orders/types';
import {storage} from './localStorage';

const ORDERS_KEY = 'orders';

export const ordersStorage = {
  set(ordersDetails: OrderType) {
    storage.set(ORDERS_KEY, ordersDetails);
  },
  delete() {
    storage.delete(ORDERS_KEY);
  },
  get() {
    return storage.get(ORDERS_KEY);
  },
};
