import React from 'react';
import {connect} from 'react-redux';
import {
  productsInOrderSelector,
  priceOfProductsInOrderSelector,
  orderAmountSelector,
} from '../../store/state/orders/selectors';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import {OrderType} from '../../store/state/orders/types';
import {Product} from '../../store/state/products/types';
import {AppStateType} from '../../store';
import {
  OrderWrapper,
  DateOfOrder,
  OrderItemWrapper,
  ProductImgWrapper,
  ProductImg,
  DescriptionWrapper,
  ProductName,
  ProductCategory,
  QtyWrapper,
  ProductQty,
  TotalProductPrice,
  TotalBlock,
  TotalText,
} from './styles';

type OrderProps = {
  order: OrderType;
  products?: Product[];
  priceOfProductsInOrder?: string;
  orderAmount?: number;
};

const Order: React.FC<OrderProps> = ({order, products, priceOfProductsInOrder, orderAmount}) => {
  const getParsedDate = (date: Date) => {
    const parsedDate = new Date(date);
    return parsedDate.toUTCString();
  };

  const navigate = useNavigate();

  const navigateToProduct = (productId: string) => {
    navigate(`${ROUTES.PRODUCTS}product/${productId}`);
  };

  return (
    <OrderWrapper>
      <DateOfOrder>{getParsedDate(order.date)}</DateOfOrder>
      {products?.map((product) => (
        <OrderItemWrapper key={product.id}>
          <ProductImgWrapper>
            <ProductImg src={product.image} alt="product img" />
          </ProductImgWrapper>
          <DescriptionWrapper>
            <ProductName onClick={() => navigateToProduct(String(product.id))}>{product.title}</ProductName>
            <ProductCategory>{product.category}</ProductCategory>
          </DescriptionWrapper>
          <QtyWrapper>
            <ProductQty>{product.quantity}</ProductQty>
          </QtyWrapper>
          <TotalProductPrice>$ {product.price}</TotalProductPrice>
        </OrderItemWrapper>
      ))}
      <TotalBlock>
        <TotalText>Total:</TotalText>
        <TotalText>{orderAmount} pcs</TotalText>
        <TotalText>$ {priceOfProductsInOrder}</TotalText>
      </TotalBlock>
    </OrderWrapper>
  );
};

const mapStateToProps = (state: AppStateType, props: OrderProps) => ({
  products: productsInOrderSelector(state, props),
  priceOfProductsInOrder: priceOfProductsInOrderSelector(state, props),
  orderAmount: orderAmountSelector(state, props),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
