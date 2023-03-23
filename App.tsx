import * as React from 'react';
import './style.css';
import Header from './component/header';
import Foods from './component/foodList';
import Cart from './component/cart';
import Notification from './uI/notification';
import { useAppSelector } from './src/myStore';
import * as Redux from 'react-redux';
import { getCartData, sendCartData } from './src/cartRedux';

export default function App() {
  const showUI = useAppSelector((state) => state.showUI);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = Redux.useDispatch();
  let isInitial = true;

  React.useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  React.useEffect(() => {
    // if (isInitial) {
    //   isInitial = false;
    //   console.log(isInitial);

    //   return;
    // }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div>
      <Header />
      <Foods />
      {showUI.showNotification && (
        <Notification notification={showUI.showNotification} />
      )}
      {showUI.isShowCart && <Cart />}
    </div>
  );
}
