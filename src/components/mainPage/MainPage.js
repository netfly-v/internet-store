import ProfilePage from 'components/profilePage/ProfilePage';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllProductsThunk } from '../../store/thunks/productsThunk';
import { ROUTES } from '../../utils/routes';
import LoginPage from '../auth/LoginPage';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import ProductPage from '../products/ProductPage';
import Products from '../products/Products';
import styles from './MainPage.module.css';

const MainPage = ({ getAllProducts }) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.mainPage}>
        <Header />
        <Menu />
        <Routes>
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.CATEGORY_PAGE} element={<Products />} />
          <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  getAllProducts: getAllProductsThunk,
};

export default connect(null, mapDispatchToProps)(MainPage);
