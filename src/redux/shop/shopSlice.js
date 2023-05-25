import { createSlice } from '@reduxjs/toolkit';

import { fetchShops } from './shopOperations';

const shopInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const shopSlice = createSlice({
  name: 'shops',
  initialState: shopInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchShops.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchShops.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchShops.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const shopReducer = shopSlice.reducer;
