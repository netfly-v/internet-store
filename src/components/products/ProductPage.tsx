import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import backImg from '../../images/back.png';
import addToCartImg from '../../images/addToCart.png';
import {connect} from 'react-redux';
import {setProductsInCartThunk} from '../../store/thunks/cartThunk';
import {ROUTES} from '../../utils/routes';
import {productsAPI} from '../../api/products';
import {Product} from '../../store/state/products/types';
import {
  BackBtnWrapper,
  CategoryText,
  ProductName,
  ProductPageHeader,
  ProductPageWrapper,
  BackBtn,
  BackBtnImg,
  ProductContentWrapper,
  ProductPageImg,
  ProductPageContentRightSide,
  ProductPageDescription,
  BuyBlock,
  PriceText,
  BuyBtn,
  ProductCartImg,
} from './styles';

type ProductPageProps = {setProductsInCart: (id: string) => void};

const ProductPage: React.FC<ProductPageProps> = ({setProductsInCart}) => {
  const {productId} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    productsAPI.getProduct(productId as string).then(setProduct);
  }, []);

  const getBack = () => {
    navigate(`${ROUTES.PRODUCTS}category/${product?.category}`);
  };

  return product ? (
    <ProductPageWrapper>
      <ProductPageHeader>
        <CategoryText>{product.category}</CategoryText>
        <ProductName>{product.title}</ProductName>
        <BackBtnWrapper>
          <BackBtn onClick={getBack}>
            <BackBtnImg src={backImg} alt="back button" />
          </BackBtn>
        </BackBtnWrapper>
      </ProductPageHeader>
      <ProductContentWrapper>
        <ProductPageImg src={product.image} alt="product img" />
        <ProductPageContentRightSide>
          <ProductPageDescription>{product.description}</ProductPageDescription>
          <BuyBlock>
            <PriceText>{product.price} $</PriceText>
            <BuyBtn
              onClick={() => {
                setProductsInCart(String(product.id));
              }}>
              <ProductCartImg src={addToCartImg} alt="cart" />
              Add to cart
            </BuyBtn>
          </BuyBlock>
        </ProductPageContentRightSide>
      </ProductContentWrapper>
    </ProductPageWrapper>
  ) : (
    <>{'Loading product'}</>
  );
};

const mapDispatchToProps = {
  setProductsInCart: setProductsInCartThunk,
};

export default connect(null, mapDispatchToProps)(ProductPage);
