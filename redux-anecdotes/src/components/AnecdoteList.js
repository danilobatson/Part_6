import { useSelector, useDispatch } from 'react-redux';
import { vote, sort, setNotification, clearNotification } from '../reducers';

import { voteAnecdote } from '../reducers/anecdoteReducer';
import { sendNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({ anecdote }) => {
  const { id, content, votes } = anecdote;

  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();
  dispatch(sort());

  const voteAnecdote = async (id) => {
    dispatch(voteAnecdote(id));
    dispatch(
      sendNotification(
        `You voted '${anecdotes.find((a) => a.id === id).content}'`
      )
    );
    setTimeout(() => {
      dispatch(clearNotification(''));
    }, 5000);
  };

  return (
    <div key={id}>
      <div>{content}</div>
      <div>
        has {votes}
        <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

export default AnecdoteList;
