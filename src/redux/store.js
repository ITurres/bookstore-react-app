import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';

const bookstore = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default bookstore;
