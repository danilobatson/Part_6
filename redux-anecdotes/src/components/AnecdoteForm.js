import { connect } from 'react-redux';

import { createAnecdote, setNotification } from '../reducers';

const AnecdoteForm = (props) => {
  const add = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.createAnecdote(content);
    const message = `anecdote ${content} created`;
    props.setNotification(message, 5);
  };

  return (
    <div>
      <form onSubmit={add}>
        <div>
          <input type='text' id='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default connect(null, { createAnecdote, setNotification })(AnecdoteForm);
