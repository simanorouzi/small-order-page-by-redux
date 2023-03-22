export type CartType = {
  items: OrderItemType[];
  totalCount: number;
};
export type StoreType = {
  cart: CartType;
  showUI: ShowCartType;
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
  showNotification?: NotificationType;
};

export type FoodItemType = {
  id: string;
  title: string;
  price: number;
};

export type NotificationType = {
  title: string;
  message: string;
  maessageType: messageType;
};

export type RequestType = {
  method: method;
  body: OrderItemType;
  headers: { [key: string]: string };
};

export enum method {
  Get = 1,
  Post = 2,
}
export enum messageType {
  success = 1,
  error = 2,
  prnding = 3,
}
