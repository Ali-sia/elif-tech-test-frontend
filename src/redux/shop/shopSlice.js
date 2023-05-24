import { createSlice } from '@reduxjs/toolkit';

const shopInitialState = {};
export const shopSlice = createSlice({
  name: 'shops',
  initialState: shopInitialState,
  reducers: {
    // setShop: (_, action) => {
    //   return action.payload;
    // },
  },
});


export const shopReducer = shopSlice.reducer;
