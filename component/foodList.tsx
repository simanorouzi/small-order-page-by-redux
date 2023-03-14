import * as React from 'react';
import * as Redux from 'react-redux';
import { useAppSelector, cartActions } from '../src/cartRedux';
import { OrderItemType, StoreType } from '../src/types';

const FoodList = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = Redux.useDispatch();

  const addToCartHandler = () => {
    const item = { id: '1', title: 'Food1', count: 1, price: 6.5 };
    dispatch(cartActions.add(item));
  };
  console.log(cart);

  return (
    <div className="food-list">
      <div>
        <h2>Title</h2>
        <p>This is first food</p>
      </div>
      <div>
        <span>6$</span>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
};

export default FoodList;
