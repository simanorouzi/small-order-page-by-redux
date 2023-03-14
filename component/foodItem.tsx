import * as React from 'react';
import { FoodItemType, OrderItemType } from '../src/types';
import * as Redux from 'react-redux';
import { cartActions } from '../src/cartRedux';

const foodItem = ({ item }: { item: FoodItemType }) => {
  const dispatch = Redux.useDispatch();

  const addToCartHandler = () => {
    const orderItem: OrderItemType = {
      id: item.id,
      count: 1,
      price: item.price,
      title: item.title,
      totalPrice: item.price,
    };
    dispatch(cartActions.add(orderItem));
  };
  return (
    <div className="food-list">
      <div>
        <h2>{item.title}</h2>
      </div>
      <div>
        <span>{item.price.toFixed(2)}$</span>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
};

export default foodItem;
