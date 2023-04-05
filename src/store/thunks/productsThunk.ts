import {productsAPI} from '../../api/products';
import {getAllProducts, getProducts} from '../state/products/actions';
import {Dispatch} from 'redux';
import {ProductsActionType} from '../state/products/types';

type DispatchType = Dispatch<ProductsActionType>;

export const getProductsThunk = (category: string) => (dispatch: DispatchType) => {
  productsAPI.getAllProducts(category).then((products) => dispatch(getProducts(products)));
};

export const getAllProductsThunk = () => (dispatch: DispatchType) => {
  productsAPI.getAllProducts().then((products) => dispatch(getAllProducts(products)));
};
