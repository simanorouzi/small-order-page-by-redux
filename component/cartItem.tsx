import * as React from 'react';
import { cartActions } from '../src/cartRedux';
import * as Redux from 'react-redux';
import { OrderItemType } from '../src/types';

const CartItem = ({ item }: { item: OrderItemType }) => {
  const dispatch = Redux.useDispatch();
  const addClickHandler = () => {
    dispatch(cartActions.add(item));
  };
  const removeClickHandler = () => {
    dispatch(cartActions.remove(item));
  };
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
