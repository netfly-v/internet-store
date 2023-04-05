import {ADD_NEW_ORDER, GET_ORDERS_HISTORY, OrderActionType} from './types';

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action: OrderActionType) => {
  switch (action.type) {
    case GET_ORDERS_HISTORY:
      return {...state, orders: [...state.orders, ...action.orders]};
    case ADD_NEW_ORDER:
      return {...state, orders: [...state.orders, action.order]};
    default:
      return state;
  }
};
