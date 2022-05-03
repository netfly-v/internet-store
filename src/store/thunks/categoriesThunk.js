import { categoriesAPI } from '../../api/categories';
import { getCategories } from '../state/categories/actions';

export const getCategoriesThunk = () => dispatch => {
  categoriesAPI.getCategories().then(categories => dispatch(getCategories(categories)));
};

