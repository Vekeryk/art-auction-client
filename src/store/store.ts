import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiSlice.ts';
import userReducer from './reducers/userSlice.ts';

const rootReducer = combineReducers({
  uiReducer,
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
