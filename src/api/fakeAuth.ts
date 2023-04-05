import {logins} from '../server-helpers/logins';

export const authAPI = {
  login(username: string, password: string) {
    return logins.some((login) => login.username === username && login.password === password);
  },
};
