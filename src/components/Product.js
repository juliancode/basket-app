import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price }) => (
  <li style={{ listStyleType: 'none', display: 'inline' }}>
    {name}: £{price.toFixed(2)}
  </li>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Product;
