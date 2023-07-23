import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './todo/todoSlice';
import themeReducer from './theme/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ todos: todoReducer, theme: themeReducer });
const presistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: presistedReducer,
  devTools: true,
  middleware: (defaulMiddleWare) => defaulMiddleWare({ serializableCheck: false }),
});

// typed state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { addTodo, updateTodo, deleteTodo } from './todo/todoSlice';
export { toggleTheme } from './theme/themeSlice';

export default store;
