import { toast } from 'react-toastify';
import { authAPI } from '../../api/fakeAuth';
import { logins } from '../../server-helpers/logins';
import { auth } from '../../utils/auth';
import { cartStorage } from '../../utils/cartStorage';
import { loginUserAction, logoutAction, setErrorAction } from '../state/auth/actions';

export const loginThunk = (username, password) => dispatch => {
  if (authAPI.login(username, password)) {
    const userId = logins.filter(login => login.username === username)[0].id;
    dispatch(loginUserAction({ username, password, userId }));
    auth.set({ username, password, userId });
    dispatch(setErrorAction(''));
    toast.success(`${username} logged in`);
  } else {
    auth.delete();
    dispatch(setErrorAction('login or pass invalid'));
    toast.error('Login failed');
  }
};

export const logoutThunk = () => dispatch => {
  auth.delete();
  cartStorage.delete();
  dispatch(logoutAction({}));
};
