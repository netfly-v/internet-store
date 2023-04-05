import {createSelector, Selector} from 'reselect';
import {keyBy} from 'lodash';
import {allProductsSelector} from '../products/selectors';
import {AppStateType} from '../..';
import {ProductType} from './types';

export const cartProductsSelector = (state: AppStateType) => state.cartDomain.cart.products;

export const makeProductsAmountSelector = (selector: Selector<AppStateType, ProductType[]>) =>
  createSelector(selector, (products) => products.reduce((acc, el) => acc + Number(el.quantity), 0));

export const productsAmountSelector = makeProductsAmountSelector(cartProductsSelector);

export const productsById = createSelector(allProductsSelector, (products) => keyBy(products, ({id}) => id));

export const makeProductsInCartSelector = (selector: Selector<AppStateType, ProductType[]>) =>
  createSelector(selector, productsById, (cartProducts, productsById) =>
    cartProducts.map(({productId, quantity}) => ({...productsById[productId], quantity})),
  );

export const productsInCartSelector = makeProductsInCartSelector(cartProductsSelector);

export const makePriceOfProductsInCartSelector = (selector: Selector<AppStateType, ProductType[]>) =>
  createSelector(selector, (productsInCart) =>
    productsInCart.reduce((acc, el) => acc + el.price * Number(el.quantity), 0).toFixed(2),
  );

export const priceOfProductsInCartSelector = makePriceOfProductsInCartSelector(productsInCartSelector);

export const isProductsAmountSelector = createSelector(productsInCartSelector, (productsInCart) =>
  productsInCart.some((product) => product.quantity < 1),
);
