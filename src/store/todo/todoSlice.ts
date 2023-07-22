import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialTodoState, Todo } from '@/types';
import { AddTodoValues } from '@/utils';

const initialState: InitialTodoState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoValues>) => {
      const { description, title } = action.payload;
      state.unshift({ id: state.length + 1, title, description, is_completed: false, date: new Date() });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
