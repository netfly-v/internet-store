import { cartAPI } from 'api/cart';
import { addNewOrderAction } from 'store/state/orders/actions';
import { cartStorage } from 'utils/cartStorage';
import { QUANTITY } from 'utils/consts';
import { toast } from 'react-toastify';
import { addToCartAction, changeQuantityAction, deleteFromCartAction, orderNowAction } from '../state/cart/actions';
import { auth } from 'utils/auth';

const calculateQuantity = (quantity, updatedQuantity) =>
  typeof updatedQuantity === 'string' ? quantity + parseInt(updatedQuantity, 10) : updatedQuantity;

const getUpdatedCart = (state, updatedProductId, updatedQuantity = QUANTITY.INCREMENT) => {
  const { authDomain, cartDomain } = state;

  const {
    cart: { cartId, products },
  } = cartDomain;

  const {
    auth: { userId },
  } = authDomain;

  const isNewProductAlreadyIncluded = products.some(({ productId }) => productId === updatedProductId);

  const updatedProducts = isNewProductAlreadyIncluded
    ? products.map(product => {
        const { productId, quantity } = product;

        return productId === updatedProductId
          ? { quantity: calculateQuantity(quantity, updatedQuantity), productId }
          : product;
      })
    : [...products, { quantity: 1, productId: updatedProductId }];

  return {
    cartId,
    userId,
    products: updatedProducts,
  };
};

const updateCart = cart =>
  cartAPI.set(cart).then(() => {
    cartStorage.set(cart);
  });

export const setProductsInCartThunk = updatedProductId => (dispatch, getState) => {
  if (auth.get()) {
    const cart = getUpdatedCart(getState(), updatedProductId);

    updateCart(cart).then(() => dispatch(addToCartAction(cart)));
    toast.info('Item added to cart');
  } else {
    toast.error('Not logged in');
  }
};

export const changeQuantityThunk = (updatedProductId, qty) => (dispatch, getState) => {
  const cart = getUpdatedCart(getState(), updatedProductId, qty);

  updateCart(cart).then(() => dispatch(changeQuantityAction(cart)));
};

export const deleteFromCartThunk = updatedProductId => (dispatch, getState) => {
  const {
    authDomain: {
      auth: { userId },
    },
    cartDomain: {
      cart: { cartId, products },
    },
  } = getState();

  const cart = {
    cartId,
    userId,
    products: products.filter(({ productId }) => productId !== updatedProductId),
  };

  updateCart(cart).then(() => dispatch(deleteFromCartAction(cart)));
};

let idCounter = 0;

export const orderNowThunk = () => (dispatch, getState) => {
  const {
    authDomain: {
      auth: { userId },
    },
    cartDomain: {
      cart: { products },
    },
  } = getState();

  return cartAPI.order(userId, products).then(order => {
    // need to change order.id, because always gets '11' from backend
    order.id += idCounter;

    dispatch(orderNowAction());
    cartStorage.delete();

    dispatch(addNewOrderAction(order));
    idCounter++;
    toast.success('Order success');
  });
};
