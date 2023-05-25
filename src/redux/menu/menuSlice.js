import { createSlice } from '@reduxjs/toolkit';
import { fetchShopMenu } from './menuOperations';

const menuInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const menuSlice = createSlice({
  name: 'menus',
  initialState: menuInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchShopMenu.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchShopMenu.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchShopMenu.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const menuReducer = menuSlice.reducer;
