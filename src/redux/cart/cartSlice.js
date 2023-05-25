import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//state and slice for "contacts"
const cartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
//persictor
const persistConfig = {
  key: 'cart',
  storage,
};

export const persistedCartReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);
