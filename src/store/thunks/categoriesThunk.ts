import {Dispatch} from 'redux';
import {categoriesAPI} from '../../api/categories';
import {getCategories} from '../state/categories/actions';
import {CategoriesActionType} from '../state/categories/types';

type DispatchType = Dispatch<CategoriesActionType>;

export const getCategoriesThunk = () => (dispatch: DispatchType) => {
  categoriesAPI.getCategories().then((categories) => dispatch(getCategories(categories)));
};
