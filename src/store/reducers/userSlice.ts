import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUser } from '../../types.ts';

interface UserState {
  user: CurrentUser | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CurrentUser | null>) => {
      state.loading = false;
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
