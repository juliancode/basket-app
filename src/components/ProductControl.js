import React from 'react';
import PropTypes from 'prop-types';

const ProductControl = ({ id, name, price, onIncrement, onDecrement }) => (
  <span>
    <button onClick={() => onIncrement(id, name, price)}>+</button>
    <button onClick={() => onDecrement(id, name, price)}>-</button>
  </span>
);

ProductControl.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductControl;
