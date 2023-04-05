import styled from 'styled-components';

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateOfOrder = styled.span`
  color: #43484d;
  padding-left: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e8ee;
  font-style: italic;
`;

export const OrderItemWrapper = styled.div`
  padding: 0 30px;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #e1e8ee;
`;

export const ProductImgWrapper = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 50px;
  height: 60px;
  object-fit: contain;
`;

export const DescriptionWrapper = styled.div`
  padding-top: 10px;
  margin-right: 60px;
  flex-basis: 100%;
`;

export const ProductName = styled.span`
  display: block;
  font-size: 12px;
  color: #43484d;
  font-weight: 400;
  margin-bottom: 5px;
  :hover {
    color: blue;
    cursor: pointer;
  }
`;

export const ProductCategory = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 300;
  margin-top: 8px;
  color: #86939e;
`;

export const QtyWrapper = styled.div`
  padding-top: 27px;
  margin: 0 10px;
  display: flex;
  flex-shrink: 0;
  flex-basis: 110px;
  justify-content: space-around;
  align-items: baseline;
`;

export const ProductQty = styled.span`
  text-align: center;
  width: 32px;
  color: #43484d;
`;

export const TotalProductPrice = styled.span`
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  flex-shrink: 0;
  flex-basis: 100px;
  text-align: right;
`;

export const TotalBlock = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px 30px 30px 0;
`;

export const TotalText = styled.span`
  color: #43484d;
  padding-left: 80px;
`;

export const ProfilePageWrapper = styled.div``;

export const ProfilePageTitle = styled.span`
  display: block;
  text-align: center;
  color: #5e6977;
  font-size: 18px;
  margin: 30px 0;
`;
