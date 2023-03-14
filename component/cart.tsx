import * as React from 'react';
import { useAppSelector } from '../src/cartRedux';
import CartItem from './cartItem';
const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="cart">
      {cart.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>Total: {cart.totalPrice}</div>
    </div>
  );
};
export default Cart;
