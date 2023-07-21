import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const bookstoreBaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/';

const setBookStoreId = async () => {
  try {
    const bookStoreId = await axios.post(`${bookstoreBaseURL}apps/`);
    localStorage.setItem('bookStoreId', bookStoreId.data);
  } catch (error) {
    return error;
  }
};

const getBooksList = createAsyncThunk(
  'books/getBooksList',
  async (thunkAPI) => {
    try {
      const bookList = await axios.get(
        `${bookstoreBaseURL}apps/${localStorage.getItem('bookStoreId')}/books`,
      );
      return bookList.data || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const postNewBook = createAsyncThunk(
  'books/postNewBook',
  async (bookData, thunkAPI) => {
    try {
      await axios.post(
        `${bookstoreBaseURL}apps/${localStorage.getItem('bookStoreId')}/books`,
        { ...bookData },
      );
      return bookData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteBookById = createAsyncThunk(
  'books/deleteBookById',
  async (bookId, thunkAPI) => {
    try {
      await axios.delete(
        `${bookstoreBaseURL}apps/${localStorage.getItem(
          'bookStoreId',
        )}/books/${bookId}`,
        {
          data: {
            item_id: bookId,
          },
        },
      );
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const bookStoreAPI = {
  setBookStoreId,
  getBooksList,
  postNewBook,
  deleteBookById,
};

export default bookStoreAPI;
