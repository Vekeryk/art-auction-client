import { createSlice } from '@reduxjs/toolkit';

import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorage.ts';
import { Theme } from '../../types.ts';

interface UiState {
  theme: Theme;
}

const initialState: UiState = {
  theme: getFromLocalStorage('theme') || 'light',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      saveToLocalStorage('theme', state.theme);
    },
  },
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
