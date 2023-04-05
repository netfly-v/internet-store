import React from 'react';
import {connect} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {getProductsSelectorByCategory} from '../../store/state/products/selectors';
import {authSelector} from '../../store/state/auth/selectors';
import ProductCard from './ProductCard';
import {ROUTES} from '../../utils/routes';
import {Product} from '../../store/state/products/types';
import {AppStateType} from '../../store';
import {ContentWrapper} from './styles';

type ProductsProps = {getProductsByCategory: (v: string | undefined) => Product[]};

const Products: React.FC<ProductsProps> = ({getProductsByCategory}) => {
  const {categoryName} = useParams();
  const products = getProductsByCategory(categoryName);

  const navigate = useNavigate();

  const openProductDetails = (productId: string) => {
    navigate(`${ROUTES.PRODUCTS}product/${productId}`);
  };

  return (
    <ContentWrapper>
      {products?.map((product) => (
        <ProductCard product={product} openProductDetails={openProductDetails} key={product.id} />
      ))}
    </ContentWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const getProductsByCategory = (categoryName: string | undefined) =>
    getProductsSelectorByCategory(state, categoryName);

  return {
    getProductsByCategory,
    authUser: authSelector(state),
  };
};

export default connect(mapStateToProps)(Products);
