import * as React from 'react';
import { showCartAction } from '../src/uiSlice';
import { useAppSelector } from '../src/myStore';
import * as Redux from 'react-redux';

const Header = () => {
  const totalCount = useAppSelector((state) => state.cart.totalCount);
  const dispatch = Redux.useDispatch();
  const showCartHandler = () => {
    dispatch(showCartAction.toggle());
  };
  return (
    <header className="menu">
      <div>
        <a href="#" onClick={showCartHandler}>
          My Cart {totalCount}
        </a>
      </div>
      <a href="#">Contact Us</a>
      <a href="#">About Us</a>
      <a href="#">Home</a>
    </header>
  );
};

export default Header;
