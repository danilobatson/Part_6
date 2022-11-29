import {
  AnecdoteForm,
  Header,
  Notification,
  Filter,
  AnecdoteList,
} from './components/';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAnecdotes } from './reducers/';
import anecdoteService from './services/anecdotes';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes);
  }, [dispatch]);

  return (
    <div>
      <Header message='Anecdotes' />
      <Notification />
      <Filter />
      {/* <AnecdoteList /> */}
      <Header message='Create New' />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};

export default App;
