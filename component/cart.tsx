import * as React from 'react';
import * as Redux from 'react-redux';
import { useAppSelector, showCartAction } from '../src/cartRedux';
import CartItem from './cartItem';
const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = Redux.useDispatch();
  const totalPrice = cart.items.reduce((prev, cur) => prev + cur.totalPrice, 0);

  const closeClickHandler = () => {
    dispatch(showCartAction.toggle());
  };
  return (
    <div className="cart">
      {cart.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>Total: {totalPrice}</div>
      <button onClick={closeClickHandler}>Close</button>
    </div>
  );
};
export default Cart;
