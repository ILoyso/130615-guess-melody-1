import axios from 'axios';
import {ActionCreator} from './reducer/user/user';


/**
 * Api for work with server
 * @param {Function} dispatch
 * @return {AxiosInstance}
 */
export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/guess-melody`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization(true));
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
