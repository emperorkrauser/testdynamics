import { createSlice } from '@reduxjs/toolkit';

export const hospitalSlice = createSlice({
  name: 'hospitals',
  initialState: {
    hospitals: [],
  },
  reducers: {
    updateHospitals: (state, action) => {
      state.hospitals = [...state.hospitals, action.payload] as any;
    },
  },
});

export const { updateHospitals } = hospitalSlice.actions;
