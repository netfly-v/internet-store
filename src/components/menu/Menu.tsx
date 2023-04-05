import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import {categoriesSelector} from '../../store/state/categories/selectors';
import {getCategoriesThunk} from '../../store/thunks/categoriesThunk';
import {AppStateType} from '../../store';
import {MenuWrapper, CategoryBtn} from './styles';

type MenuProps = {
  categories: string[];
  getCategories: () => void;
};

const Menu: React.FC<MenuProps> = ({categories, getCategories}) => {
  const navigate = useNavigate();
  const {pathname = ''} = useLocation();
  const categoryName = decodeURI(pathname.replace('/internet-store/category/', ''));

  useEffect(() => {
    getCategories();
  }, []);

  const getProductsByCategory = (category: string) => {
    navigate(`${ROUTES.PRODUCTS}category/${category}`);
  };

  return (
    <MenuWrapper>
      {categories
        ? categories.map((category, idx) => (
            <CategoryBtn
              $isActive={category === categoryName ? true : false}
              key={idx}
              onClick={() => {
                getProductsByCategory(category);
              }}>
              {category}
            </CategoryBtn>
          ))
        : null}
    </MenuWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  categories: categoriesSelector(state),
});

const mapDispatchToProps = {
  getCategories: getCategoriesThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
