import { ordersAPI } from 'api/orders';
import { getOrdersHistoryAction } from 'store/state/orders/actions';
import { ordersHistoryByIdSelector } from 'store/state/orders/selectors';

export const getOrdersHistoryThunk = userId => (dispatch, getState) => {
  ordersAPI.getOrders(userId).then(orders => {
    const state = getState();
    const prevOrdersHistoryById = ordersHistoryByIdSelector(state);
    const filteredOrders = orders.filter(({ id }) => !prevOrdersHistoryById[id]);
    console.log(filteredOrders, prevOrdersHistoryById)
    dispatch(getOrdersHistoryAction(filteredOrders));
  });
};
