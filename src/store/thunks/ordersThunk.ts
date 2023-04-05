import {Dispatch} from 'redux';
import {GetStateType} from '..';
import {ordersAPI} from '../../api/orders';
import {getOrdersHistoryAction} from '../state/orders/actions';
import {ordersHistoryByIdSelector} from '../state/orders/selectors';
import {OrderActionType, OrderType} from '../state/orders/types';

type DispatchType = Dispatch<OrderActionType>;

export const getOrdersHistoryThunk = (userId: number) => (dispatch: DispatchType, getState: GetStateType) => {
  ordersAPI.getOrders(userId).then((orders) => {
    const state = getState();
    const prevOrdersHistoryById = ordersHistoryByIdSelector(state);
    const filteredOrders = orders.filter(({id}: OrderType) => !prevOrdersHistoryById[id]);
    dispatch(getOrdersHistoryAction(filteredOrders));
  });
};
