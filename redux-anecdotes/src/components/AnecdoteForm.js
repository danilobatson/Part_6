import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    console.log('hello');
    dispatch(createAnecdote(content));
  };

  return (
    <div>
      <form onSubmit={addAnecdote}>
        <div>
          <input type='text' id='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;