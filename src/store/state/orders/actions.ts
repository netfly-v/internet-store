import {ADD_NEW_ORDER, GET_ORDERS_HISTORY, OrderActionType, OrderType} from './types';

export const getOrdersHistoryAction = (orders: OrderType[]): OrderActionType => ({type: GET_ORDERS_HISTORY, orders});
export const addNewOrderAction = (order: OrderType): OrderActionType => ({type: ADD_NEW_ORDER, order});
