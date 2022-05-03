import { cartStorage } from '../../../utils/cartStorage';
import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_QUANTITY, ORDER_NOW } from './types';

const initialCart = {
  cartId: 1,
  products: [],
};

const initialState = {
  cart: cartStorage.get() ? cartStorage.get() : initialCart,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.cart };
    case DELETE_FROM_CART:
      return { ...state, cart: action.cart };
    case CHANGE_QUANTITY:
      return { ...state, cart: action.cart };
    case ORDER_NOW:
      return { ...state, cart: initialCart };
    default:
      return state;
  }
};
