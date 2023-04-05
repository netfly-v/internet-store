import React from 'react';
import addToCartImg from '../../images/addToCart.png';
import {setProductsInCartThunk} from '../../store/thunks/cartThunk';
import {connect} from 'react-redux';
import {Product} from '../../store/state/products/types';
import {
  ProductCardWrapper,
  ProductCardItemName,
  CardItemImg,
  ProductCategory,
  RatingWrapper,
  StyledRating,
  VotedText,
  CardItemDescription,
  CardBuyBlock,
  ItemPrice,
  AddToCardBtn,
  AddToCardImg,
} from './styles';

type ProductCardProps = {
  product: Product;
  openProductDetails: (id: string) => void;
  setProductsInCart: (id: string) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({product, openProductDetails, setProductsInCart}) => {
  return (
    <ProductCardWrapper>
      <ProductCardItemName onClick={() => openProductDetails(String(product.id))}>{product.title}</ProductCardItemName>
      <CardItemImg src={product.image} alt="product img" />
      <ProductCategory>{product.category}</ProductCategory>
      <RatingWrapper>
        <StyledRating name="read-only" defaultValue={product.rating.rate} precision={0.5} size="small" readOnly />
        <VotedText>voted: {product.rating.count}</VotedText>
      </RatingWrapper>
      <CardItemDescription>{product.description}</CardItemDescription>
      <CardBuyBlock>
        <ItemPrice>{product.price} $</ItemPrice>
        <AddToCardBtn
          onClick={() => {
            setProductsInCart(String(product.id));
          }}>
          <AddToCardImg src={addToCartImg} alt="cart" />
          Add to cart
        </AddToCardBtn>
      </CardBuyBlock>
    </ProductCardWrapper>
  );
};

const mapDispatchToProps = {
  setProductsInCart: setProductsInCartThunk,
};

export default connect(null, mapDispatchToProps)(ProductCard);
