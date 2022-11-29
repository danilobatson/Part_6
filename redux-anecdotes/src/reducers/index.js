import anecdoteReducer from './anecdoteReducer';
import notificationReducer from './notificationReducer';
import filterReducer from './filterReducer';
import { setNotification, clearNotification } from './notificationReducer';
import { vote, sort, createAnecdote } from './anecdoteReducer';
import { setFilter } from './filterReducer';

export {
  anecdoteReducer,
  notificationReducer,
  setNotification,
  clearNotification,
  vote,
  sort,
  setFilter,
  createAnecdote,
  filterReducer,
};
