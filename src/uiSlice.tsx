import * as ReduxToolkit from '@reduxjs/toolkit';

import { messageType, NotificationType, ShowCartType } from '../src/types';

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
      state.showNotification = {
        title: payload.title,
        message: payload.message,
        maessageType: payload.maessageType,
      };
    },
  },
});

const sendCartDate = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: 'Pending',
        message: 'Data is Sending...',
        maessageType: messageType.prnding,
      })
    );

    const response = await fetch(
      'https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
    );

    if (response.ok) {
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
export const uiActions = uiSlice.actions;
export default uiSlice;
