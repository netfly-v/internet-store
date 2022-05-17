import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { categoriesSelector } from '../../store/state/categories/selectors';
import { getCategoriesThunk } from '../../store/thunks/categoriesThunk';
import { classNames } from '../../utils/utils';
import styles from './Menu.module.css';

const Menu = ({ categories, getCategories }) => {
  const navigate = useNavigate();
  const { pathname = '' } = useLocation();
  const categoryName = decodeURI(pathname.replace('/category/', ''));

  useEffect(() => {
    getCategories();
  }, []);

  const getProductsByCategory = category => {
    navigate(`${ROUTES.PRODUCTS}category/${category}`);
  };

  return (
    <div className={styles.menu}>
      {categories
        ? categories.map((category, idx) => (
            <button
              className={classNames([styles.menuButton, category === categoryName && styles.menuButton_active])}
              key={idx}
              onClick={() => {
                getProductsByCategory(category);
              }}
            >
              {category}
            </button>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: categoriesSelector(state),
});

const mapDispatchToProps = {
  getCategories: getCategoriesThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
