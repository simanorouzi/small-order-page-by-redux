import * as React from 'react';
import * as Redux from 'react-redux';
import { useAppSelector, showCartAction } from '../src/cartRedux';
import CartItem from './cartItem';
const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = Redux.useDispatch();

  const closeClickHandler = () => {
    dispatch(showCartAction.toggle());
  };
  return (
    <div className="cart">
      {cart.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>Total: {cart.totalPrice}</div>
      <button onClick={closeClickHandler}>Close</button>
    </div>
  );
};
export default Cart;
