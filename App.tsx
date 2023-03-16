import * as React from 'react';
import './style.css';
import Header from './component/header';
import Foods from './component/foodList';
import Cart from './component/cart';
import Notification from './uI/notification';
import { useAppSelector } from './src/myStore';

export default function App() {
  const showUI = useAppSelector((state) => state.showUI);
  const cart = useAppSelector((state) => state.cart);
  React.useEffect(() => {}, [cart]);
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
