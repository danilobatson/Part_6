import React from 'react';
import { connect } from 'react-redux';

import { sort, setFilter } from '../reducers';
import { AnecdoteList } from './';

const Filter = (props) => {
  const handleChange = (event) => {
    props.setFilter(event.target.value);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      <input type='text' id='filter' onChange={handleChange} />
    </div>
  );
};

export default connect(null, { setFilter })(Filter);
