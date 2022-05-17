import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';
import backImg from '../../images/back.png';
import addToCartImg from '../../images/addToCart.png';
import { productsAPI } from '../../api/products';
import { connect } from 'react-redux';
import { setProductsInCartThunk } from 'store/thunks/cartThunk';
import { ROUTES } from 'utils/routes';

const ProductPage = ({ setProductsInCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productsAPI.getProduct(productId).then(setProduct);
  }, []);

  const getBack = () => {
    navigate(`${ROUTES.PRODUCTS}category/${product.category}`);
  };

  return product ? (
    <div className={styles.productPage} key={product.id}>
      <div className={styles.productHeader}>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.productName}>{product.title}</p>
        <div className={styles.backButton}>
          <button onClick={getBack}>
            <img src={backImg} alt="back button" />
          </button>
        </div>
      </div>
      <div className={styles.productContent}>
        <img src={product.image} className={styles.productPage_img} alt="product img" />
        <div className={styles.contentRightSide}>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.buy}>
            <p className={styles.price}>{product.price} $</p>
            <button
              onClick={() => {
                setProductsInCart(product.id);
              }}
            >
              <img src={addToCartImg} className={styles.productPage_cart} alt="cart" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    'Loading product'
  );
};

const mapDispatchToProps = {
  setProductsInCart: setProductsInCartThunk,
};

export default connect(null, mapDispatchToProps)(ProductPage);

