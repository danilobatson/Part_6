import { useDispatch } from 'react-redux';
import {
  createAnecdote,
  setNotification,
  clearNotification,
} from '../reducers';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    await dispatch(createAnecdote(content));
    await dispatch(setNotification(`you created '${content}'`, 5));
    setTimeout(() => {
      dispatch(clearNotification(''));
    }, 5000);
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
