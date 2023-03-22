import * as ReduxToolkit from '@reduxjs/toolkit';

import { CartType, StoreType } from '../src/types';

const initialCart: CartType = {
  items: [],
  totalCount: 0,
};

const cartSlice = ReduxToolkit.createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    add(state: CartType, action) {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);
      if (existItem) {
        existItem.count++;
        existItem.totalPrice = existItem.totalPrice + existItem.price;
      } else {
        state.items = [...state.items, newItem];
      }
      state.totalCount++;
    },
    remove(state: CartType, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.count > 1) {
        existingItem.count--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
      state.totalCount--;
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice;
