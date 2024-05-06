import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    updateForm: (state, action) => {
      console.log('updateForm state', state);
      console.log('updateForm action', action);
      state.users = [...state.users, action.payload] as any;
    },
  },
});

export const { updateForm } = userSlice.actions;
