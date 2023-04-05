import React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import {QUANTITY} from '../../utils/consts';
import {changeQuantityThunk, deleteFromCartThunk} from '../../store/thunks/cartThunk';
import {
  CartItemWrapper,
  DelBtnWrapper,
  DeleteBtn,
  ProductImg,
  ProductImgWrapper,
  DescriptionWrapper,
  Span,
  QtyBlockWrapper,
  ChangeQtyBtn,
  QtyInput,
  TotalPrice,
} from './styles';

type CartItemProps = {
  product: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    quantity: string;
    rating: {count: number; rate: number};
    title: string;
  };
  changeQuantityInCart: (id: number, updatedQuantity: string) => void;
  deleteFromCart: (id: number) => void;
};

interface IUpdateLocalQuantity {
  target: {value: string};
}

const CartItem: React.FC<CartItemProps> = ({product, changeQuantityInCart, deleteFromCart}) => {
  const [quantity, setQuantity] = useState<string>(product.quantity);
  const debounced = (updatedQuantity: number) => changeQuantityInCart(product.id, String(updatedQuantity));

  const updateLocalQuantity = ({target}: IUpdateLocalQuantity) => {
    const {value} = target;
    if (parseInt(value, 10) > 0) {
      setQuantity(value);
    }
    if (value === '') {
      setQuantity(value);
    }
  };

  const changeQuantityRequest = (updatedQuantity: string) => {
    if (quantity) {
      debounced(Number(updatedQuantity));
    }
  };

  const onDeleteItem = () => {
    deleteFromCart(product.id);
  };

  const onMoreQty = () => {
    setQuantity(String(Number(quantity) + 1));
    changeQuantityRequest(QUANTITY.INCREMENT);
  };

  const onLessQty = () => {
    if (Number(quantity) > 1) {
      setQuantity(String(Number(quantity) - 1));
      changeQuantityRequest(QUANTITY.DECREMENT);
    }
  };

  const onChangeQty = () => {
    changeQuantityRequest(quantity);
  };

  return (
    <CartItemWrapper key={product.id}>
      <DelBtnWrapper>
        <DeleteBtn onClick={onDeleteItem} />
      </DelBtnWrapper>
      <ProductImgWrapper>
        <ProductImg src={product.image} alt="" />
      </ProductImgWrapper>

      <DescriptionWrapper>
        <Span>{product.title}</Span>
        <Span>{product.category}</Span>
      </DescriptionWrapper>

      <QtyBlockWrapper>
        <ChangeQtyBtn type="button" name="button" onClick={onMoreQty}>
          +
        </ChangeQtyBtn>
        <QtyInput value={quantity} type="text" onChange={updateLocalQuantity} onBlur={onChangeQty} />
        <ChangeQtyBtn type="button" name="button" onClick={onLessQty}>
          -
        </ChangeQtyBtn>
      </QtyBlockWrapper>

      <TotalPrice>{product.price} $</TotalPrice>
    </CartItemWrapper>
  );
};

const mapDispatchToProps = {
  changeQuantityInCart: changeQuantityThunk,
  changeQuantity: changeQuantityThunk,
  deleteFromCart: deleteFromCartThunk,
};

export default connect(null, mapDispatchToProps)(CartItem);
