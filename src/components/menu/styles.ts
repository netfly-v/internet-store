import styled from 'styled-components';

export const MenuWrapper = styled.div`
  background-color: aliceblue;
  display: flex;
  justify-content: center;
`;

export const CategoryBtn = styled.button<{$isActive?: boolean}>`
  border: none;
  background-color: ${({$isActive}) => ($isActive ? 'aqua' : 'transparent')};
  cursor: pointer;
  height: 50px;
  width: 150px;
  :hover {
    background-color: aqua;
  }
`;
