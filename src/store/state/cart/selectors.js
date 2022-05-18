import { createSelector } from 'reselect';
import { keyBy } from 'lodash';
import { allProductsSelector } from '../products/selectors';

export const cartProductsSelector = state => state.cartDomain.cart.products;

export const makeProductsAmountSelector = selector =>
  createSelector(selector, products => products.reduce((acc, el) => acc + el.quantity, 0));

export const productsAmountSelector = makeProductsAmountSelector(cartProductsSelector);

export const productsById = createSelector(allProductsSelector, products => keyBy(products, ({ id }) => id));

export const makeProductsInCartSelector = selector =>
  createSelector(selector, productsById, (cartProducts, productsById) =>
    cartProducts.map(({ productId, quantity }) => ({ ...productsById[productId], quantity }))
  );

export const productsInCartSelector = makeProductsInCartSelector(cartProductsSelector);

export const makePriceOfProductsInCartSelector = selector =>
  createSelector(selector, productsInCart =>
    productsInCart.reduce((acc, el) => acc + el.price * el.quantity, 0).toFixed(2)
  );

export const priceOfProductsInCartSelector = makePriceOfProductsInCartSelector(productsInCartSelector);

export const isProductsAmountSelector = createSelector(productsInCartSelector, productsInCart =>
  productsInCart.some(product => product.quantity < 1)
);
