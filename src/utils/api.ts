import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://dev.codeleap.co.uk'
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('@3x-test/token');

  config.headers = {
    Authorization: token ? `Bearer ${token}` : ''
  };

  return config;
});

export default api;
