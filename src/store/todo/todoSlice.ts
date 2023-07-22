import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { InitialTodoState, Todo } from '@/types';

const initialState: InitialTodoState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    test: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      console.log(state);
      return state;
    },
  },
});

export const { test } = todoSlice.actions;
export default todoSlice.reducer;
