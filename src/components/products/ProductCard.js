import styles from './ProductCard.module.css';
import addToCartImg from '../../images/addToCart.png';
import { setProductsInCartThunk } from 'store/thunks/cartThunk';
import { connect } from 'react-redux';
import { Rating } from '../../../node_modules/@mui/material/index';

const ProductCard = ({ product, openProductDetails, setProductsInCart }) => {
  return (
    <div className={styles.product}>
      <p className={styles.productName} onClick={() => openProductDetails(product.id)}>
        {product.title}
      </p>
      <img src={product.image} alt="product img" />
      <p className={styles.category}>{product.category}</p>
      <div className={styles.ratingWrapper}>
        <Rating
          className={styles.rating}
          name="read-only"
          defaultValue={product.rating.rate}
          precision={0.5}
          size="small"
          readOnly
        />
        <p className={styles.voted}>voted: {product.rating.count}</p>
      </div>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.buy}>
        <p className={styles.price}>{product.price} $</p>
        <button
          onClick={() => {
            setProductsInCart(product.id);
          }}
        >
          <img src={addToCartImg} alt="cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setProductsInCart: setProductsInCartThunk,
};

export default connect(null, mapDispatchToProps)(ProductCard);
