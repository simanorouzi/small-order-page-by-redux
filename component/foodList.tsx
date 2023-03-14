import * as React from 'react';
import { FoodItemType } from '../src/types';
import FoodItem from './foodItem';

const dumyFoddList: FoodItemType[] = [
  { id: '1', title: 'Chiken', price: 5 },
  { id: '2', title: 'Kebab', price: 10 },
  { id: '3', title: 'Burger', price: 15 },
];
const FoodList = () => {
  return dumyFoddList.map((item) => <FoodItem item={item} key={item.id} />);
};

export default FoodList;
