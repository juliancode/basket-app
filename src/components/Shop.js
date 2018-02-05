import React from 'react';
import ProductList from './ProductList';

const Shop = ({ products, onAddProduct, onRemoveProduct }) => (
  <ProductList
    products={products}
    onIncrement={onAddProduct}
    onDecrement={onRemoveProduct}
  />
);

export default Shop;
