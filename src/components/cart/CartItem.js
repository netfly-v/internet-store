import { useState } from 'react';
import { connect } from 'react-redux';

import { changeQuantityThunk, deleteFromCartThunk } from 'store/thunks/cartThunk';
import { QUANTITY } from 'utils/consts';

import styles from './CartItem.module.css';

const CartItem = ({ product, changeQuantityInCart, deleteFromCart }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const debounced = updatedQuantity => changeQuantityInCart(product.id, updatedQuantity);

  const updateLocalQuantity = ({ target }) => {
    const { value } = target;
    if (parseInt(value, 10) > 0) {
      setQuantity(parseInt(value, 10));
    }
    if (value === '') {
      setQuantity(value);
    }
  };

  const changeQuantityRequest = updatedQuantity => {
    if (quantity) {
      debounced(updatedQuantity);
    }
  };

  return (
    <div className={styles.item} key={product.id}>
      <div className={styles.buttons}>
        <button
          className={styles.deleteBtn}
          onClick={() => {
            deleteFromCart(product.id);
          }}
        />
      </div>
      <div className={styles.productImage}>
        <img src={product.image} className={styles.image} alt="" />
      </div>

      <div className={styles.description}>
        <span className={styles.productName}>{product.title}</span>
        <span className={styles.category}>{product.category}</span>
      </div>

      <div className={styles.quantity}>
        <button
          className={styles.qtyIcon}
          type="button"
          name="button"
          onClick={() => {
            setQuantity(quantity + 1);
            changeQuantityRequest(QUANTITY.INCREMENT);
          }}
        >
          +
        </button>
        <input
          value={quantity}
          type="text"
          onChange={updateLocalQuantity}
          onBlur={() => {
            changeQuantityRequest(quantity);
          }}
        />
        <button
          className={styles.qtyIcon}
          type="button"
          name="button"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
              changeQuantityRequest(QUANTITY.DECREMENT);
            }
          }}
        >
          -
        </button>
      </div>

      <div className={styles.totalPrice}>{product.price} $</div>
    </div>
  );
};

const mapDispatchToProps = {
  changeQuantityInCart: changeQuantityThunk,
  changeQuantity: changeQuantityThunk,
  deleteFromCart: deleteFromCartThunk,
};

export default connect(null, mapDispatchToProps)(CartItem);
