export const GET_CATEGORIES = 'GET_CATEGORIES';

export type CategoriesType = {categories: string[]};

type GetCategoriesActionType = {
  type: typeof GET_CATEGORIES;
  categories: CategoriesType;
};

export type CategoriesActionType = GetCategoriesActionType;
