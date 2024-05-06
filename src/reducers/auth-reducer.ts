import { createSlice } from '@reduxjs/toolkit';

export interface AuthProps {
  isLogout: boolean;
  isAuth: boolean;
  user: object;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogout: true,
    isAuth: false,
    user: {},
  } as AuthProps,
  reducers: {
    isLogout: (state, action) => {
      state.isLogout = action.payload;
    },
    isAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { isLogout, isAuth } = authSlice.actions;
