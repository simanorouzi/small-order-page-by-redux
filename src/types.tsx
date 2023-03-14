import { expandTagDescription } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export type CartType = {
  items: OrderItemType[];
  totalCount: number;
};
export type StoreType = {
  cart: CartType;
  showCart: ShowCartType;
};
export type OrderItemType = {
  id: string;
  title: string;
  count: number;
  price: number;
  totalPrice: number;
};
export type ShowCartType = {
  isShowCart: boolean;
};

export type FoodItemType = {
  id: string;
  title: string;
  price: number;
};
