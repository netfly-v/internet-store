import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { productsReducer } from './state/products';
import { categoriesReducer } from './state/categories';
import { authReducer } from './state/auth';
import { cartReducer } from './state/cart';
import { ordersReducer } from './state/orders/index';

const reducers = combineReducers({
  productsDomain: productsReducer,
  categoriesDomain: categoriesReducer,
  authDomain: authReducer,
  cartDomain: cartReducer,
  ordersDomain: ordersReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));
