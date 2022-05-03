import { productsAPI } from '../../api/products';
import { getAllProducts, getProducts } from '../state/products/actions';

export const getProductsThunk = (category) => (dispatch) => {
  productsAPI.getAllProducts(category).then(products => dispatch(getProducts(products)));
};

export const getAllProductsThunk = () => (dispatch) => {
  productsAPI.getAllProducts().then(products => dispatch(getAllProducts(products)));
};
