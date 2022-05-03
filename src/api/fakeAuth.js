import { logins } from '../server-helpers/logins';

export const authAPI = {
  login(username, password) {
    return logins.some(login => login.username === username && login.password === password);
  },
};
