import React from 'react';

import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { setupStore } from './store/store.ts';
import App from './App.tsx';
import './index.css';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
