import axios from 'axios';

const auctionAxios = axios.create({
  baseURL: import.meta.env.VITE_AUCTION_SERVICE_API_URL,
});

auctionAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

auctionAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isCancel(error) && error.response?.status >= 500) {
      alert('Щось пішло не так. Спробуйте ще раз пізніше');
    }
    return Promise.reject(error);
  },
);

export default auctionAxios;
