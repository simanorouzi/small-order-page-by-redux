import * as ReduxToolkit from '@reduxjs/toolkit';

import { ShowCartType } from '../src/types';

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

export const showCartAction = showCartSlice.actions;
export default showCartSlice;
