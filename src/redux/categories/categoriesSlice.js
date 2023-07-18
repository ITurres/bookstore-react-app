import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under Construction',
  },
  reducers: {
    statusCheck: (state) => state.status,
  },
});

export const { statusCheck } = categoriesSlice.actions;

export default categoriesSlice.reducer;
