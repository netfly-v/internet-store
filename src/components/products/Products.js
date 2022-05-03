import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsSelectorByCategory } from '../../store/state/products/selectors';
import styles from './Products.module.css';
import { authSelector } from '../../store/state/auth/selectors';
import ProductCard from './ProductCard';

const Products = ({ getProductsByCategory }) => {
  const { categoryName } = useParams();
  const products = getProductsByCategory(categoryName);

  const navigate = useNavigate();

  const openProductDetails = productId => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={styles.content}>
      {products
        ? products.map(product => (
            <ProductCard product={product} openProductDetails={openProductDetails} key={product.id} />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = state => {
  //todo: ? memoize
  const getProductsByCategory = categoryName => getProductsSelectorByCategory(state, categoryName);

  return {
    getProductsByCategory,
    authUser: authSelector(state),
  };
};

export default connect(mapStateToProps)(Products);
