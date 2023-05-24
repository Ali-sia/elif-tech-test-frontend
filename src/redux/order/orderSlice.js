import { createSlice } from '@reduxjs/toolkit';

const orderInitialState = {};
export const orderSlice = createSlice({
  name: 'orders',
  initialState: orderInitialState,
  reducers: {
    // setShop: (_, action) => {
    //   return action.payload;
    // },
  },
});


export const orderReducer = orderSlice.reducer;
