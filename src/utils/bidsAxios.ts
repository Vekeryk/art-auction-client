import axios from 'axios';

const auctionAxios = axios.create({
  baseURL: import.meta.env.VITE_BIDS_SERVICE_API_URL,
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
