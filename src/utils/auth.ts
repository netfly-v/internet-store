import {AuthType} from '../store/state/auth/types';
import {storage} from './localStorage';

const AUTH_KEY = 'auth';

export const auth = {
  set(authStatus: AuthType) {
    storage.set(AUTH_KEY, authStatus);
  },
  delete() {
    storage.delete(AUTH_KEY);
  },
  get() {
    return storage.get(AUTH_KEY);
  },
};
