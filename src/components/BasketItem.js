import React from 'react';
import PropTypes from 'prop-types';

const BasketItem = ({ id, name, price, quantity }) => (
  <li key={id}>
    {quantity}x {name} £{(quantity * price).toFixed(2)}
  </li>
);

BasketItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default BasketItem;
