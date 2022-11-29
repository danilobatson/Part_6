import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state = action.payload;
    },
    clearNotification: (state) => {
      state = '';
    },
  },
});
export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
