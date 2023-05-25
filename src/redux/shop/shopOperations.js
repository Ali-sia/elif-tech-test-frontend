import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi } from 'http/http';

// GET @ /shops
export const fetchShops = createAsyncThunk(
  'shops/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/shops');
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
