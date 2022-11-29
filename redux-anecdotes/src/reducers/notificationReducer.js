import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification: (state, action) => {
      return action.payload;
    },
    clearNotification: () => {
      return '';
    },
  },
});
export const { setNotification, clearNotification } = notificationSlice.actions;

export const sendNotification = (content) => {
  return async (dispatch) => {
    dispatch(setNotification(content));
  };
};

export default notificationSlice.reducer;
