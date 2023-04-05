import {CategoriesActionType, CategoriesType, GET_CATEGORIES} from './types';

export const getCategories = (categories: CategoriesType): CategoriesActionType => ({
  type: GET_CATEGORIES,
  categories,
});
