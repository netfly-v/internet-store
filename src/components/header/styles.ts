import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div``;

export const LogoImg = styled.img`
  height: 50px;
  cursor: pointer;
`;

export const HeaderRightSideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const CartButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
`;

export const CartImg = styled.img`
  height: 35px;
`;

export const QuantityBadge = styled.div`
  position: absolute;
  background-color: rgb(4, 176, 4);
  width: 20px;
  height: 20px;
  color: white;
  border-radius: 50%;
  top: -3px;
  right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const LoginOkText = styled.span`
  font-size: 20px;
  padding-bottom: 3px;
  margin-right: 10px;
  a {
    text-decoration: none;
  }
`;

export const AuthButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  color: darkgray;
  :hover {
    color: blue;
  }
`;

export const StyledNavLinkLogin = styled(NavLink)`
  align-self: center;
  margin-right: 20px;
`;
