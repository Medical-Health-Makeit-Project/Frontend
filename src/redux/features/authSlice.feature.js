import { createSlice } from '@reduxjs/toolkit';
import { findUserWithToken } from '../thunks';
import { TOKEN } from '@constants';

const initialState = {};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state = action.payload;
      return state;
    },
    logout: () => {
      localStorage.removeItem(TOKEN);
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findUserWithToken.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
