import { ADD_TO_CART, CHANGE_QUANTITY, DELETE_FROM_CART, ORDER_NOW } from './types';

export const addToCartAction = cart => ({ type: ADD_TO_CART, cart });
export const deleteFromCartAction = cart => ({ type: DELETE_FROM_CART, cart });
export const changeQuantityAction = cart => ({ type: CHANGE_QUANTITY, cart });
export const orderNowAction = () => ({type: ORDER_NOW})
