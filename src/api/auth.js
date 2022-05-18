// ! normal auth is not working, using fakeAuth

import axios from 'axios';
import { logins } from '../server-helpers/logins';

// export const authAPI = {
//   login(username, password) {
//     axios
//       .post(
//         'https://fakestoreapi.com/auth/login',
//         {
//           username,
//           password,
//         },
//         {
//           headers: { 'Access-Control-Allow-Origin': '*' },
//         }
//       )
//       .then(response => response.data);
//   },
// };
