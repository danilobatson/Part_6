import anecdoteReducer from './anecdoteReducer';
import notificationReducer from './notificationReducer';
import filterReducer from './filterReducer';
import { setNotification } from './notificationReducer';
import {
  createAnecdote,
  appendAnecdote,
  setAnecdotes,
} from './anecdoteReducer';
import { setFilter } from './filterReducer';

export {
  anecdoteReducer,
  notificationReducer,
  setNotification,
  setFilter,
  createAnecdote,
  filterReducer,
  appendAnecdote,
  setAnecdotes,
};
