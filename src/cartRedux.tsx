import * as ReduxToolkit from '@reduxjs/toolkit';

import { CartType, messageType, OrderItemType, StoreType } from '../src/types';
import uiSlice, { uiActions } from './uiSlice';

const initialCart: CartType = {
  items: [],
  totalCount: 0,
  changed: false,
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
      state.changed = true;
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
      state.changed = true;
    },
    getData(state: CartType, { payload }: { payload: CartType }) {
      state.items = payload.items ? payload.items : [];
      state.totalCount = payload.totalCount;
    },
  },
});

export const sendCartData = (cartData: CartType) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: 'Pending',
        message: 'Data is Sending...',
        maessageType: messageType.prnding,
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Cart.json',
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) {
        throw new Error('sen data went wrong');
      }
    };

    try {
      const sned = await sendRequest();
      console.log(sned);
      dispatch(
        uiActions.showNotification({
          title: 'Success',
          message: 'Data sent successfully',
          maessageType: messageType.success,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: 'Success',
          message: 'Data sent successfully',
          maessageType: messageType.success,
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Cart.json'
      );
      if (!response.ok) {
        throw new Error('fetch data went wrong');
      }
      const data = response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.getData(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: 'Error',
          message: error,
          maessageType: messageType.success,
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;
export default cartSlice;
