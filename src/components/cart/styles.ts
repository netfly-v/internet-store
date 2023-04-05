import styled from 'styled-components';
import delIcon from '../../images/delete-icn.svg';

export const CartPageWrapper = styled.div`
  margin: 20px auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
`;

export const CartPageTitle = styled.p`
  height: 40px;
  border-bottom: 1px solid #e1e8ee;
  padding-left: 30px;
  padding-bottom: 20px;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 30px;
  padding-top: 10px;
`;

export const TotalText = styled.span`
  color: #43484d;
  padding-left: 80px;
`;

export const OrderWrapper = styled.div`
  margin: 0 auto;
`;

export const OrderNowBtn = styled.button`
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin: 10px 0;
  :hover {
    background-color: cyan;
  }
`;

export const CartItemWrapper = styled.div`
  padding: 0 30px;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #e1e8ee;
  @media (max-width: 800px) {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const DelBtnWrapper = styled.div`
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
  @media (max-width: 800px) {
    margin-right: 20px;
  }
`;

export const DeleteBtn = styled.button`
  display: inline-block;
  cursor: pointer;
  border: none;
  width: 18px;
  height: 17px;
  background: url(${delIcon}) no-repeat center;
`;

export const ProductImgWrapper = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 70px;
  height: 80px;
  object-fit: contain;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 6px 0;
    img {
      width: 50%;
    }
  }
`;

export const DescriptionWrapper = styled.div`
  padding-top: 10px;
  margin-right: 60px;
  flex-basis: 100%;
  span {
    display: block;
    font-size: 12px;
    color: #43484d;
    font-weight: 400;
  }
  span:first-child {
    margin-bottom: 5px;
  }
  span:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939e;
  }
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
`;

export const Span = styled.span``;

export const QtyBlockWrapper = styled.div`
  padding-top: 20px;
  margin: 0 10px;
  display: flex;
  flex-shrink: 0;
  flex-basis: 110px;
  justify-content: space-around;
  align-items: baseline;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
`;

export const ChangeQtyBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: #989898;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  :hover {
    background-color: cyan;
  }
  :focus {
    outline: 0;
  }
`;

export const QtyInput = styled.input`
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  :focus {
    outline: 0;
  }
`;

export const TotalPrice = styled.div`
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  flex-shrink: 0;
  flex-basis: 100px;
  text-align: right;
`;
