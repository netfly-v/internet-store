import React from 'react';
import {connect} from 'react-redux';

import {
  productsInCartSelector,
  productsAmountSelector,
  priceOfProductsInCartSelector,
  isProductsAmountSelector,
} from '../../store/state/cart/selectors';

import CartItem from './CartItem';
import {orderNowThunk} from '../../store/thunks/cartThunk';
import CircularProgress from '@mui/material/CircularProgress';
import {useState} from 'react';
import {AppStateType} from '../../store';
import {CartPageTitle, CartPageWrapper, TotalWrapper, TotalText, OrderWrapper, OrderNowBtn} from './styles';

type CartPageProps = {
  productsInCart: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    quantity: string;
    rating: {count: number; rate: number};
    title: string;
  }[];
  productsAmount: number;
  priceOfProductsInCart: string;
  orderNow: () => Promise<void>;
  onClose: () => void;
  isProductsAmount: boolean;
};

const CartPage: React.FC<CartPageProps> = ({
  productsInCart,
  productsAmount,
  priceOfProductsInCart,
  orderNow,
  onClose,
  isProductsAmount,
}) => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <CartPageWrapper>
      <CartPageTitle>Shopping Cart</CartPageTitle>
      {productsInCart ? productsInCart.map((product) => <CartItem product={product} key={product.id} />) : null}
      {productsAmount ? (
        <TotalWrapper>
          <TotalText>Total:</TotalText>
          <TotalText>{productsAmount} pcs</TotalText>
          <TotalText>{priceOfProductsInCart} $</TotalText>
        </TotalWrapper>
      ) : null}

      <OrderWrapper>
        {showLoader ? (
          <CircularProgress />
        ) : (
          <OrderNowBtn
            disabled={!productsInCart.length || isProductsAmount || showLoader}
            onClick={() => {
              setShowLoader(true);
              orderNow().then(onClose);
            }}>
            Order now
          </OrderNowBtn>
        )}
      </OrderWrapper>
    </CartPageWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  productsInCart: productsInCartSelector(state),
  productsAmount: productsAmountSelector(state),
  priceOfProductsInCart: priceOfProductsInCartSelector(state),
  isProductsAmount: isProductsAmountSelector(state),
});

const mapDispatchToProps = {
  orderNow: orderNowThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
