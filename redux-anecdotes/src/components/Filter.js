import { useSelector, useDispatch } from 'react-redux';
import {
  sort,
  setFilter,
} from '../reducers';
import { AnecdoteList } from './';

const Filter = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  dispatch(sort());

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredAnecdotes = anecdotes.filter((a) => {
    return a.content.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <input
        type='text'
        id='filter'
        value={filter}
        onChange={(event) => handleChange(event)}
      />
      {filteredAnecdotes.map((anecdote) => (
        <AnecdoteList key={anecdote.id} anecdote={anecdote} />
      ))}
    </>
  );
};

export default Filter;
