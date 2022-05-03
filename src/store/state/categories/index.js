import { GET_CATEGORIES } from './types';

const initialState = {
  categories: [],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};
