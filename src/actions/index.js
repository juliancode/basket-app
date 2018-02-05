import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

export const addProduct = (id, name, price) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    id,
    name,
    price
  };
};

export const removeProduct = (id, name, price) => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    id,
    name,
    price
  };
};

export const fetchBasket = () => dispatch => {
  requestBasket();
  axios
    .get('http://localhost:3001/basket')
    .then(response => {
      dispatch(receiveBasket(response.data));
    })
    .catch(err => {
      dispatch(fetchBasketError(err));
    });
};

export const requestBasket = () => ({ type: actionTypes.REQUEST_BASKET });
export const receiveBasket = json => ({
  type: actionTypes.RECEIVE_BASKET,
  basketItems: json
});
export const fetchBasketError = err => ({
  type: actionTypes.FETCH_BASKET_ERROR,
  payload: err
});