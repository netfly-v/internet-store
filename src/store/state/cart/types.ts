export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const ORDER_NOW = 'ORDER_NOW';

export type ProductType = {productId: number; quantity: string; price: number};
export type CartType = {cartId: number; products: ProductType[]; userId: number};

type AddToCartActionType = {
  type: typeof ADD_TO_CART;
  cart: CartType;
};
type DeleteFromCartActionType = {
  type: typeof DELETE_FROM_CART;
  cart: CartType;
};
type ChangeQuantityActionType = {
  type: typeof CHANGE_QUANTITY;
  cart: CartType;
};
type OrderNowActionType = {
  type: typeof ORDER_NOW;
};

export type CartActionType =
  | AddToCartActionType
  | DeleteFromCartActionType
  | ChangeQuantityActionType
  | OrderNowActionType;
