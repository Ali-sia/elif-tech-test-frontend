import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi } from 'http/http';

// GET @ /shops
export const fetchShopMenu = createAsyncThunk(
  'menus/fetchShopMenu',
  async (shopId, thunkAPI) => {
    try {
      const response = await privateApi.get(`/menus/${shopId}`);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
