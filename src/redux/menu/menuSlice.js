import { createSlice } from '@reduxjs/toolkit';

const menuInitialState = {};
export const menuSlice = createSlice({
  name: 'menus',
  initialState: menuInitialState,
  reducers: {
    // setShop: (_, action) => {
    //   return action.payload;
    // },
  },
});


export const menuReducer = menuSlice.reducer;
