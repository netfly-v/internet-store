import {ProductType} from '../cart/types';

export const GET_ORDERS_HISTORY = 'GET_ORDERS_HISTORY';
export const ADD_NEW_ORDER = 'ADD_NEW_ORDER';

export type OrderType = {date: Date; id: number; products: ProductType[]; userId: number};

type AddNewOrderActionType = {
  type: typeof ADD_NEW_ORDER;
  order: OrderType;
};

type GetOrdersHistoryActionType = {
  type: typeof GET_ORDERS_HISTORY;
  orders: any;
};

export type OrderActionType = AddNewOrderActionType | GetOrdersHistoryActionType;
