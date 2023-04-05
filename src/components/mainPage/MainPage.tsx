import React from 'react';
import ProfilePage from '../profilePage/ProfilePage';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getAllProductsThunk} from '../../store/thunks/productsThunk';
import {ROUTES} from '../../utils/routes';
import LoginPage from '../auth/LoginPage';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import ProductPage from '../products/ProductPage';
import Products from '../products/Products';

type MainPageProps = {
  getAllProducts: () => void;
};

const MainPage: React.FC<MainPageProps> = ({getAllProducts}) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.CATEGORY_PAGE} element={<Products />} />
        <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
        <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  getAllProducts: getAllProductsThunk,
};

export default connect(null, mapDispatchToProps)(MainPage);
