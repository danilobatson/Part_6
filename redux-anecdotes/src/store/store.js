import { configureStore } from '@reduxjs/toolkit';
import {
  anecdoteReducer,
  notificationReducer,
  filterReducer,
} from '../reducers';
export const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});
