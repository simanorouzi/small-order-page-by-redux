import { expandTagDescription } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export type CartType = {
  items: OrderItemType[];
  totalCount: number;
  totalPrice: number;
};
export type StoreType = {
  cart: CartType;
};
export type OrderItemType = {
  id: string;
  title: string;
  count: number;
  price: number;
};
export type ShowCartType = {
  isShowCart: boolean;
};
