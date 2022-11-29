import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotification } from '../reducers';

import {
  voteAnecdote,
  initializeAnecdotes,
  likeAnecdote,
} from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.filter
      ? state.anecdotes.filter((a) => a.content.includes(state.filter))
      : state.anecdotes
  );

  const sortedAnecdotes = [...anecdotes].sort((a1, a2) => a2.votes - a1.votes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  const voteAnecdote = async (id) => {
    const theAnecdote = anecdotes.find((a) => a.id === id);

    dispatch(voteAnecdote(theAnecdote));
    const message = `anecdote ${
      anecdotes.find((a) => a.id === id).content
    } voted`;
    dispatch(createNotification(message, 5));
  };

  const vote = (id) => {
    const theAnecdote = anecdotes.find((a) => a.id === id);
    dispatch(likeAnecdote(theAnecdote));
    const message = `anecdote ${
      anecdotes.find((a) => a.id === id).content
    } liked`;
    dispatch(setNotification(message, 5));
  };
  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
