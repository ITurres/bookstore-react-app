import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const bookstore = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default bookstore;
