import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import bookStoreAPI from '../../services/bookStoreAPI';
import bookDataFormatter from '../../components/utils/bookDataFormatter';

const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(bookStoreAPI.getBooksList.fulfilled, (state, action) => {
        state.isLoading = false;
        const formattedDataBooks = Object.keys(action.payload)
          .map((key) => bookDataFormatter(action.payload[key], key));
        state.books = [...formattedDataBooks];
      })
      .addCase(bookStoreAPI.postNewBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(bookStoreAPI.deleteBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          bookStoreAPI.getBooksList.pending,
          bookStoreAPI.postNewBook.pending,
          bookStoreAPI.deleteBookById.pending,
        ),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(
          bookStoreAPI.getBooksList.rejected,
          bookStoreAPI.postNewBook.rejected,
          bookStoreAPI.deleteBookById.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
