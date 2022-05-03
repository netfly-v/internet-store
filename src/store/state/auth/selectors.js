import { createSelector } from 'reselect';

export const authSelector = state => state.authDomain.auth;
export const errorSelector = state => state.authDomain.error;
export const getUserIdSelector = createSelector(authSelector, ({ userId }) => userId);
