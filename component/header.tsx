import * as React from 'react';
import { useAppSelector } from '../src/cartRedux';

const Header = () => {
  const totalCount = useAppSelector((state) => state.cart.totalCount);
  return (
    <header className="menu">
      <div>
        <a href="#">My Cart {totalCount}</a>
      </div>
      <a href="#">Contact Us</a>
      <a href="#">About Us</a>
      <a href="#">Home</a>
    </header>
  );
};

export default Header;
