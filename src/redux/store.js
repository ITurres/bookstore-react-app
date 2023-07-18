import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const bookStore = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default bookStore;
