import {GET_ALL_PRODUCTS, GET_PRODUCTS, ProductsActionType, ProductsType} from './types';

export const getProducts = (products: ProductsType): ProductsActionType => ({type: GET_PRODUCTS, products});
export const getAllProducts = (products: ProductsType): ProductsActionType => ({type: GET_ALL_PRODUCTS, products});
