import React from 'react';
import PropTypes from 'prop-types';
import BasketItem from './BasketItem';

const BasketList = ({ basket }) => (
  <div>
    <h3>Basket</h3>
    <ul style={{ margin: '5px 0', padding: '0' }}>
      {basket.map(item => <BasketItem key={item.id} {...item} />)}
    </ul>
  </div>
);

BasketList.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  )
};

export default BasketList;
