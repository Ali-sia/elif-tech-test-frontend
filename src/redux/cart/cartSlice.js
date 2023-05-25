import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//state and slice for "contacts"
const cartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.items = Array.isArray(state.items)
        ? state.items.find(item => (item._id === payload._id ? true : false))
          ? state.items.map(item =>
              item._id === payload._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.items, payload]
        : [payload];
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter(item => item._id !== payload._id);
    },
    deleteAllCart: (state, { payload }) => {
      state.items = [];
    },
  },
});

export const { addToCart, deleteFromCart, deleteAllCart } = cartSlice.actions;

//persictor
const persistConfig = {
  key: 'cart',
  storage,
};

export const persistedCartReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);
