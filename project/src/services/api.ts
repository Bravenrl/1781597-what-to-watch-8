import axios, {AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_URL, REQEST_TIMEOUT } from './const';
import { getToken } from './token';

export type UnauthorisedCbType = () => void;


export const createApi = (): AxiosInstance => {
  const api = axios.create(
    {
      baseURL: API_URL,
      timeout: REQEST_TIMEOUT,
    });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        config.headers['X-Token'] = token;
      }
      return config;
    });

  // api.interceptors.response.use(
  //   (response: AxiosResponse) => response,
  //   (err:AxiosError) => {
  //     const {response} = err;
  //     if(response?.status===HttpCode.Unauthorised) {
  //       onUnauthorised();
  //     }
  //     return Promise.reject(err);
  //   },
  // );

  return api;
};

const api = createApi();
// () => store.dispatch(requireAuthStatus(AuthStatus.NoAuth)));

export default api;

