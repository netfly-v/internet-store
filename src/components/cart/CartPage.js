import { connect } from 'react-redux';

import {
  isProductsAmountSelector,
  priceOfProductsInCartSelector,
  productsAmountSelector,
  productsInCartSelector,
} from 'store/state/cart/selectors';

import styles from './CartPage.module.css';
import CartItem from './CartItem';
import { orderNowThunk } from 'store/thunks/cartThunk';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

const CartPage = ({ productsInCart, productsAmount, priceOfProductsInCart, orderNow, onClose, isProductsAmount }) => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className={styles.shoppingCart}>
      <p className={styles.title}>Shopping Cart</p>
      {productsInCart ? productsInCart.map(product => <CartItem product={product} key={product.id} />) : null}
      {productsAmount ? (
        <div className={styles.total}>
          <span className={styles.totalInCart}>Total:</span>
          <span className={styles.totalInCart}>{productsAmount} pcs</span>
          <span className={styles.totalInCart}>{priceOfProductsInCart} $</span>
        </div>
      ) : null}

      <div className={styles.order}>
        {showLoader ? (
          <CircularProgress />
        ) : (
          <button
            className={styles.orderNow}
            disabled={!productsInCart.length || isProductsAmount || showLoader}
            onClick={() => {
              setShowLoader(true);
              orderNow().then(onClose);
            }}
          >
            Order now
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  productsInCart: productsInCartSelector(state),
  productsAmount: productsAmountSelector(state),
  priceOfProductsInCart: priceOfProductsInCartSelector(state),
  isProductsAmount: isProductsAmountSelector(state),
});

const mapDispatchToProps = {
  orderNow: orderNowThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
