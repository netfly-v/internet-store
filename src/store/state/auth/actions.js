import { LOGIN, LOGOUT, SET_ERROR } from './types';

export const loginUserAction = auth => ({ type: LOGIN, auth });
export const setErrorAction = error => ({ type: SET_ERROR, error });
export const logoutAction = auth => ({ type: LOGOUT, auth });
