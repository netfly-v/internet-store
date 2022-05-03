import { ADD_NEW_ORDER, GET_ORDERS_HISTORY } from './types';

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_HISTORY:
      return { ...state, orders: [...state.orders, ...action.orders] };
    case ADD_NEW_ORDER:
      return { ...state, orders: [...state.orders, action.order] };
    default:
      return state;
  }
};
