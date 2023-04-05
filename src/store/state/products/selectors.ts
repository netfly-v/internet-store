import {createSelector} from 'reselect';
import {Product} from './types';

export const allProductsSelector = (state: any) => state.productsDomain.allProducts;

export const getProductsSelectorByCategory = createSelector(
  [allProductsSelector, (_, category) => category],
  (allProducts, category) => (category ? allProducts.filter((p: Product) => p.category === category) : allProducts),
);
