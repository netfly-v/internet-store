import { GET_PRODUCTS, GET_ALL_PRODUCTS } from './types';

const initialState = {
  allProducts: [],
  products: [],
  product: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.products };
    default:
      return state;
  }
};
