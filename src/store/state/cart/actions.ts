import {ADD_TO_CART, CartActionType, CartType, CHANGE_QUANTITY, DELETE_FROM_CART, ORDER_NOW} from './types';

export const addToCartAction = (cart: CartType): CartActionType => ({type: ADD_TO_CART, cart});
export const deleteFromCartAction = (cart: CartType): CartActionType => ({type: DELETE_FROM_CART, cart});
export const changeQuantityAction = (cart: CartType): CartActionType => ({type: CHANGE_QUANTITY, cart});
export const orderNowAction = (): CartActionType => ({type: ORDER_NOW});
