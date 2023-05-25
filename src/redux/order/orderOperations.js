import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi } from 'http/http';

// GET @ /shops
export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (newOrder, thunkAPI) => {
    try {
      const response = await privateApi.post(`/orders`, { ...newOrder });
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
