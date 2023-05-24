import { configureStore } from '@reduxjs/toolkit';

import { shopReducer } from './shop/shopSlice';
import { menuReducer } from './menu/menuSlice';
import { ordersSlice } from './order/orderSlice';

import { persistedCartReducer } from './slice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    cartItems: persistedCartReducer,
    shops: shopReducer,
    menus: menuReducer,
    orders: ordersSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
