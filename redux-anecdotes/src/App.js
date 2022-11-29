import { AnecdoteForm, Header, Notification, Filter } from './components/';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAnecdotes } from './reducers/';
import anecdoteService from './services/anecdotes';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdotes(anecdotes)));
  }, [dispatch]);
  return (
    <div>
      <Header message='Anecdotes' />
      <Notification />
      <Filter />
      {/* <AnecdoteList /> */}
      <Header message='Create New' />
      <AnecdoteForm />
    </div>
  );
};

export default App;
