import * as Redux from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import * as ReduxToolkit from '@reduxjs/toolkit';

import { CartType, StoreType } from '../src/types';

const initialCart: CartType = {
  items: [],
  totalPrice: 0,
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
        state.totalCount++;
      } else {
        state.items = [...state.items, newItem];
      }
      state.totalPrice = state.totalCount * action.payload.price;
    },
    remove(state: CartType, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.count > 1) {
        state.totalCount--;
      } else {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
      state.totalPrice = state.totalCount * action.payload.price;
    },
  },
});

const store = ReduxToolkit.configureStore<StoreType>({
  reducer: { cart: cartSlice.reducer },
});

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export const cartActions = cartSlice.actions;
export default store;
