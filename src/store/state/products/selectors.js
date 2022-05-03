import { createSelector } from 'reselect';

export const allProductsSelector = state => state.productsDomain.allProducts;

export const getProductsSelectorByCategory = createSelector(
  [allProductsSelector, (_, category) => category],
  (allProducts, category) => (category ? allProducts.filter(p => p.category === category) : allProducts)
);
