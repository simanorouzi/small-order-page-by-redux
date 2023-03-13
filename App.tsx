import * as React from 'react';
import './style.css';
import Header from './component/header';
import Foods from './component/foodList';
import Cart from './component/cart';

export default function App() {
  return (
    <div>
      <Header />
      <Foods />
      <Cart />
    </div>
  );
}