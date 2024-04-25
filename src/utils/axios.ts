import axios from 'axios';

// import { showToast } from './index';
// import { getAccessToken } from './localStorage';
// import { DEFAULT_ERROR_MESSAGE } from './constants';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isCancel(error) && error.response?.status >= 500) {
      alert('Щось пішло не так. Спробуйте ще раз пізніше');
      // showToast(DEFAULT_ERROR_MESSAGE, 'error');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
