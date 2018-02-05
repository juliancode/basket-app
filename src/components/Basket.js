import React from 'react';
import PropTypes from 'prop-types';
import BasketList from './BasketList';
import BasketTotal from './BasketTotal';

const Basket = ({ basketItems, basketTotal }) => (
  <div>
    <BasketList basket={basketItems} />
    <BasketTotal total={basketTotal} />
  </div>
);

Basket.propTypes = {
  basketItems: PropTypes.array,
  basketTotal: PropTypes.number
};

export default Basket;
