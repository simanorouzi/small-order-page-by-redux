import * as Redux from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import * as ReduxToolkit from '@reduxjs/toolkit';

import { CartType, ShowCartType, StoreType } from '../src/types';

const initialCart: CartType = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const initialShowCart: ShowCartType = { isShowCart: false };
const showCartSlice = ReduxToolkit.createSlice({
  name: 'showCart',
  initialState: initialShowCart,
  reducers: {
    toggle(state: ShowCartType) {
      state.isShowCart = !state.isShowCart;
    },
  },
});
const cartSlice = ReduxToolkit.createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    add(state: CartType, action) {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);
      if (existItem) {
        existItem.count++;
      } else {
        state.items = [...state.items, newItem];
      }
      state.totalCount++;
      state.totalPrice = state.totalCount * action.payload.price;
    },
    remove(state: CartType, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.count > 1) {
        existingItem.count--;
      } else {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
      state.totalPrice = state.totalCount * action.payload.price;
      state.totalCount--;
    },
  },
});

const store = ReduxToolkit.configureStore<StoreType>({
  reducer: { cart: cartSlice.reducer },
});

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export const cartActions = cartSlice.actions;
export default store;
