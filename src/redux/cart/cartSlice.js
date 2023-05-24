import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//state and slice for "contacts"
const cartInitialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {},
});

//persictor
const persistConfig = {
  key: 'cart',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);
