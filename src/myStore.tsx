import * as ReduxToolkit from '@reduxjs/toolkit';
import cartSlice from './cartRedux';
import uiSlice from './uiSlice';
import { StoreType } from './types';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = ReduxToolkit.configureStore<StoreType>({
  reducer: { cart: cartSlice.reducer, showUI: uiSlice.reducer },
});

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export default store;
