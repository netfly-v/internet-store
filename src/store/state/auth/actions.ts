import {AuthActionType, AuthType, LOGIN, LOGOUT, SET_ERROR} from './types';

export const loginUserAction = (auth: AuthType): AuthActionType => ({type: LOGIN, auth});
export const setErrorAction = (error: string): AuthActionType => ({type: SET_ERROR, error});
export const logoutAction = (auth: AuthType): AuthActionType => ({type: LOGOUT, auth});
