import { connect } from 'react-redux';
import {
  orderAmountSelector,
  priceOfProductsInOrderSelector,
  productsInOrderSelector,
} from 'store/state/orders/selectors';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import styles from './Order.module.css';

const Order = ({ order, products, priceOfProductsInOrder, orderAmount }) => {
  const getParsedDate = date => {
    const parsedDate = new Date(date);
    return parsedDate.toUTCString();
  };

  const navigate = useNavigate();

  const navigateToProduct = productId => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={styles.order}>
      <span className={styles.dateOfOrder}>{getParsedDate(order.date)}</span>
      {products.map(product => (
        <div className={styles.item} key={product.id}>
          <div className={styles.productImage}>
            <img src={product.image} alt="product img" className={styles.image} />
          </div>
          <div className={styles.description}>
            <span className={styles.productName} onClick={() => navigateToProduct(product.id)}>
              {product.title}
            </span>
            <span className={styles.category}>{product.category}</span>
          </div>
          <div className={styles.quantity}>
            <span>{product.quantity}</span>
          </div>
          <div className={styles.totalPrice}>$ {product.price}</div>
        </div>
      ))}
      <div className={styles.total}>
        <span className={styles.totalInCart}>Total:</span>
        <span className={styles.totalInCart}>{orderAmount} pcs</span>
        <span className={styles.totalInCart}>$ {priceOfProductsInOrder}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  products: productsInOrderSelector(state, props),
  priceOfProductsInOrder: priceOfProductsInOrderSelector(state, props),
  orderAmount: orderAmountSelector(state, props),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
