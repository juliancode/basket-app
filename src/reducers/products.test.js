import products from './products';
import initialState from '../constants/PRODUCTS_LIST';

describe('reducers', () => {
  it('has a default state', () => {
    expect(products(undefined, {})).toEqual(initialState);
  });
});
