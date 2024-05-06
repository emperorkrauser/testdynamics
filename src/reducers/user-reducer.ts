import { createSlice } from '@reduxjs/toolkit';

// For registering users
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    updateForm: (state, action) => {
      state.users = [...state.users, action.payload] as any;
    },
  },
});

export const { updateForm } = userSlice.actions;
