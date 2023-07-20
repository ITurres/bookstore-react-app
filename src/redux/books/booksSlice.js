import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import bookStoreAPI from '../../services/bookStoreAPI';

const initialState = {
  isLoading: true,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer: (state) => {
        state.isLoading = true;
      },

      prepare: (payload) => payload,
    },
    removeBook: {
      reducer: (state) => {
        state.isLoading = true;
      },
      prepare: (payload) => payload,
    },
  },
  extraReducers(builder) {
    builder
      .addCase(bookStoreAPI.getBooksList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(bookStoreAPI.postNewBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const newBook = action.payload;
        state.books[newBook.item_id] = newBook;
      })
      .addCase(bookStoreAPI.deleteBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        const { payload: bookId } = action;
        delete state.books[bookId];
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
