import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import ProductControl from './ProductControl';

const ProductList = ({ products, onIncrement, onDecrement }) => (
  <div>
    <h3>Products</h3>
    <ul style={{ margin: '5px 0', padding: '0' }}>
      {products.map(product => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '200px'
          }}
        >
          <Product {...product} />
          <ProductControl
            {...product}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </div>
      ))}
    </ul>
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default ProductList;
