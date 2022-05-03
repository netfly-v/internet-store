import { ADD_NEW_ORDER, GET_ORDERS_HISTORY } from './types';

export const getOrdersHistoryAction = orders => ({ type: GET_ORDERS_HISTORY, orders });
export const addNewOrderAction = order => ({type: ADD_NEW_ORDER, order})