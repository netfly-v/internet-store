import {toast} from 'react-toastify';
import {auth} from '../../utils/auth';
import {cartStorage} from '../../utils/cartStorage';
import {QUANTITY} from '../../utils/consts';
import {addToCartAction, changeQuantityAction, deleteFromCartAction, orderNowAction} from '../state/cart/actions';
import {addNewOrderAction} from '../state/orders/actions';
import {cartAPI} from '../../api/cart';
import {Dispatch} from 'redux';
import {CartActionType, CartType, ProductType} from '../state/cart/types';
import {AppStateType, GetStateType} from '..';
import {OrderActionType, OrderType} from '../state/orders/types';

type DispatchType = Dispatch<CartActionType | OrderActionType>;

const calculateQuantity = (quantity: string, updatedQuantity: string) =>
  typeof updatedQuantity === 'string' ? quantity + parseInt(updatedQuantity, 10) : updatedQuantity;

const getUpdatedCart = (state: AppStateType, updatedProductId: number, updatedQuantity = QUANTITY.INCREMENT) => {
  const {authDomain, cartDomain} = state;

  const {
    cart: {cartId, products},
  } = cartDomain;

  const {
    auth: {userId},
  } = authDomain;

  const isNewProductAlreadyIncluded = products.some(({productId}: ProductType) => productId === updatedProductId);

  const updatedProducts = isNewProductAlreadyIncluded
    ? products.map((product: ProductType) => {
        const {productId, quantity} = product;

        return productId === updatedProductId
          ? {quantity: calculateQuantity(quantity, updatedQuantity), productId}
          : product;
      })
    : [...products, {quantity: 1, productId: updatedProductId}];

  return {
    cartId,
    userId,
    products: updatedProducts,
  };
};

const updateCart = (cart: CartType) =>
  cartAPI.set(cart).then(() => {
    cartStorage.set(cart);
  });

export const setProductsInCartThunk =
  (updatedProductId: string) => (dispatch: DispatchType, getState: GetStateType) => {
    if (auth.get()) {
      const cart = getUpdatedCart(getState(), Number(updatedProductId));

      updateCart(cart).then(() => dispatch(addToCartAction(cart)));
      toast.info('Item added to cart');
    } else {
      toast.error('Not logged in');
    }
  };

export const changeQuantityThunk =
  (updatedProductId: number, qty: string) => (dispatch: DispatchType, getState: GetStateType) => {
    const cart = getUpdatedCart(getState(), updatedProductId, qty);

    updateCart(cart).then(() => dispatch(changeQuantityAction(cart)));
  };

export const deleteFromCartThunk = (updatedProductId: number) => (dispatch: DispatchType, getState: GetStateType) => {
  const {
    authDomain: {
      auth: {userId},
    },
    cartDomain: {
      cart: {cartId, products},
    },
  } = getState();

  const cart = {
    cartId,
    userId,
    products: products.filter(({productId}: ProductType) => productId !== updatedProductId),
  };

  updateCart(cart).then(() => dispatch(deleteFromCartAction(cart)));
};

let idCounter = 0;

export const orderNowThunk = () => (dispatch: DispatchType, getState: GetStateType) => {
  const {
    authDomain: {
      auth: {userId},
    },
    cartDomain: {
      cart: {products},
    },
  } = getState();

  return cartAPI.order(userId, products).then((order: OrderType) => {
    // need to change order.id, because always gets '11' from backend
    order.id += idCounter;

    dispatch(orderNowAction());
    cartStorage.delete();

    dispatch(addNewOrderAction(order));
    idCounter++;
    toast.success('Order success');
  });
};
