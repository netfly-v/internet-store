import { keyBy, orderBy } from 'lodash';
import { createSelector } from 'reselect';

import {
  makePriceOfProductsInCartSelector,
  makeProductsAmountSelector,
  makeProductsInCartSelector,
} from '../cart/selectors';

export const ordersHistorySelector = state => state.ordersDomain.orders;

export const ordersHistoryByIdSelector = createSelector(ordersHistorySelector, orders => keyBy(orders, ({ id }) => id));
export const sortedOrdersHistorySelector = createSelector(ordersHistorySelector, orders =>
  orderBy(orders, [o => new Date(o.date).getTime()], ['desc'])
);

export const productsFromPropsSelector = (_, props) => props.order.products;

export const orderAmountSelector = makeProductsAmountSelector(productsFromPropsSelector);
export const productsInOrderSelector = makeProductsInCartSelector(productsFromPropsSelector);
export const priceOfProductsInOrderSelector = makePriceOfProductsInCartSelector(productsInOrderSelector);

// old products selector
// export const productsInHistorySelector = createSelector(ordersHistorySelector, productsById, (orders, productsById) =>
//   orders.map(({ products, date }) => [
//     date,
//     products.reduce((acc, el) => acc + el.quantity, 0),
//     ...products.map(({ productId, quantity }) => ({ ...productsById[productId], quantity })),
//   ])
// );
