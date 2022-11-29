import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
