import * as ReduxToolkit from '@reduxjs/toolkit';

import { NotificationType, ShowCartType } from '../src/types';

const initialShowCart: ShowCartType = {
  isShowCart: false,
  showNotification: null,
};

const uiSlice = ReduxToolkit.createSlice({
  name: 'uiSlice',
  initialState: initialShowCart,
  reducers: {
    toggle(state: ShowCartType) {
      state.isShowCart = !state.isShowCart;
    },
    showNotification(
      state: ShowCartType,
      { payload }: { payload: NotificationType }
    ) {
      state.showNotification.title = payload.title;
      state.showNotification.message = payload.message;
      state.showNotification.maessageType = payload.maessageType;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
