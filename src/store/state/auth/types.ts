export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_ERROR = 'SET_ERROR';

export type AuthType = {username: string; password: string; userId: number};

type LoginActionType = {
  type: typeof LOGIN;
  auth: AuthType;
};
type LogoutActionType = {
  type: typeof LOGOUT;
  auth: AuthType;
};
type SetErrorActionType = {
  type: typeof SET_ERROR;
  error: string;
};

export type AuthActionType = LoginActionType | LogoutActionType | SetErrorActionType;
