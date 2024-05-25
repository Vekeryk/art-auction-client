import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AUCTION_SERVICE_URL,
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
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
