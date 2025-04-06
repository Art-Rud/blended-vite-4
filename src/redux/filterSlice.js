import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterTodo: (state, action) => {
      return action.payload;
    },
  },
});
export default slice.reducer;
export const { filterTodo } = slice.actions;
