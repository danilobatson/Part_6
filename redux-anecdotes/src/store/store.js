import { configureStore } from '@reduxjs/toolkit';
import { anecdoteReducer, notificationReducer } from '../reducers';
export const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
    notification: notificationReducer,
  },
});
