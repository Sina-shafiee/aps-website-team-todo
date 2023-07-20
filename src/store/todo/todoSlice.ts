import { Todo } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    test: (state, action: PayloadAction<number>) => {
      action.payload;
    },
  },
});

export const { test } = todoSlice.actions;
export default todoSlice.reducer;
