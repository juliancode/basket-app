import { combineReducers } from 'redux';
import basketItems from './basketItems';
import products from './products';

const basketApp = combineReducers({
  basketItems,
  products
});

export default basketApp;
