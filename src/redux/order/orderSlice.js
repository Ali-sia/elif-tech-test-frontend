import { createSlice } from '@reduxjs/toolkit';

import { addOrder } from './orderOperations';

const orderInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const orderSlice = createSlice({
  name: 'orders',
  initialState: orderInitialState,
  extraReducers: builder => {
    builder
      .addCase(addOrder.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addOrder.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const orderReducer = orderSlice.reducer;
