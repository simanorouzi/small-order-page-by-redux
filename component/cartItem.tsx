import * as React from 'react';
import { cartActions } from '../src/cartRedux';
import * as Redux from 'react-redux';
import { messageType, OrderItemType } from '../src/types';
import { uiActions } from '../src/uiSlice';

const CartItem = ({ item }: { item: OrderItemType }) => {
  const dispatch = Redux.useDispatch();
  const addClickHandler = () => {
    dispatch(cartActions.add(item));
    dispatch(
      uiActions.showNotification({
        title: 'Success',
        message: 'Add to cart did successfully',
        maessageType: messageType.success,
      })
    );
  };
  const removeClickHandler = () => {
    dispatch(cartActions.remove(item));
  };
  console.log(item);
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.price.toFixed(2)}$</p>
      <p>{item.count}X</p>
      <button onClick={addClickHandler}>+</button>
      <button onClick={removeClickHandler}>-</button>
    </div>
  );
};

export default CartItem;
