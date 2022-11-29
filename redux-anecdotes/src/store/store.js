import { configureStore } from '@reduxjs/toolkit';
import { anecdoteReducer } from '../reducers';
export const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
  },
});
