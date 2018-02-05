import React from 'react';
import PropTypes from 'prop-types';

const BasketTotal = ({ total }) => <div>Subtotal: £{total.toFixed(2)}</div>;

BasketTotal.propTypes = {
  total: PropTypes.number
};

export default BasketTotal;
