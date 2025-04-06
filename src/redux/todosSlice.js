import { createSlice } from '@reduxjs/toolkit';
export const selectCurentTodo = state => state.todos.currentTodo;

const slice = createSlice({
  name: 'todos',
  initialState: { items: [], currentTodo: null },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    currentTodo: (state, action) => {
      state.currentTodo = action.payload;
      console.log(state.currentTodo);
    },
    editTodo: (state, action) => {
      state.items = state.items.map(item =>
        item.id === state.currentTodo.id
          ? { ...item, text: action.payload }
          : item,
      );
    },
  },
});
export default slice.reducer;

export const { addTodo, deleteTodo, currentTodo, editTodo } = slice.actions;
