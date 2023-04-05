import {Rating} from '@mui/material';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductPageWrapper = styled.div``;

export const ProductPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const CategoryText = styled.p`
  color: darkgray;
  margin-top: 15px;
  text-decoration: underline;
`;

export const ProductName = styled.p`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`;

export const BackBtnWrapper = styled.div``;

export const BackBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const BackBtnImg = styled.img`
  height: 50px;
`;

export const ProductContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const ProductPageImg = styled.img`
  object-fit: contain;
  width: 500px;
  flex-shrink: 0;
  height: 250px;
  display: block;
  margin: 0 auto;
`;

export const ProductPageContentRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProductPageDescription = styled.p`
  font-style: italic;
  margin-left: 20px;
`;

export const BuyBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const PriceText = styled.p`
  color: darkred;
  font-size: 80px;
  align-self: center;
`;

export const BuyBtn = BackBtn;

export const ProductCartImg = styled.img`
  display: flex;
  height: 100px;
`;

export const ProductCardWrapper = styled.div`
  border: 1px solid aqua;
  margin: 30px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const ProductCardItemName = styled.p`
  text-align: center;
  font-size: 20px;
  padding: 20px 5px;
  cursor: pointer;
`;

export const CardItemImg = styled.img`
  display: block;
  height: 150px;
  margin: 0 auto;
`;

export const ProductCategory = styled.p`
  margin-left: 20px;
  font-size: 13px;
  text-decoration: underline;
  color: darkgray;
  padding: 10px 0;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -3px;
`;

export const StyledRating = styled(Rating)`
  margin-left: 20px;
`;

export const VotedText = styled.p`
  font-size: 10px;
  margin-left: 10px;
  color: darkgray;
`;

export const CardItemDescription = styled.p`
  margin: 5px 20px 0;
  font-size: 11px;
  font-style: italic;
  flex-grow: 1;
`;

export const CardBuyBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

export const ItemPrice = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: darkred;
  margin-left: 20px;
`;

export const AddToCardBtn = styled.button`
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border: 1px solid darkgray;
    border-radius: 6px;
  }
`;

export const AddToCardImg = styled.img`
  height: 30px;
`;
