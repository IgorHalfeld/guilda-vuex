import { HTTPClient } from '../utils/request';

export default {
  get: () => {
    return HTTPClient.get('/users');
  },
  getById: userId => {
    return HTTPClient.get(`/users/${userId}`);
  },
};
