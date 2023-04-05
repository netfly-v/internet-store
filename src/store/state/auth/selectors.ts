import {createSelector} from 'reselect';

export const authSelector = (state: any) => state.authDomain.auth;
export const errorSelector = (state: any) => state.authDomain.error;
export const getUserIdSelector = createSelector(authSelector, ({userId}) => userId);
