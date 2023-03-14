import * as React from 'react';
import './style.css';
import Header from './component/header';
import Foods from './component/foodList';
import Cart from './component/cart';
import { useAppSelector } from './src/cartRedux';

export default function App() {
  const isShowCart = useAppSelector((state) => state.showCart.isShowCart);
  return (
    <div>
      <Header />
      <Foods />
      {isShowCart && <Cart />}
    </div>
  );
}
