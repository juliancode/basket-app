import basketItems from './basketItems';
import deepFreeze from 'deep-freeze';

describe('basketItems Reducer', () => {
  it('has a default state', () => {
    expect(basketItems(undefined, {})).toEqual([]);
  });

  it('should handle ADD_PRODUCT action', () => {
    const stateBefore = [];
    const stateAfter = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      }
    ];

    deepFreeze(stateBefore);

    expect(
      basketItems(stateBefore, {
        type: 'ADD_PRODUCT',
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      })
    ).toEqual(stateAfter);
  });

  it('should handle ADD_PRODUCT action', () => {
    const stateBefore = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      }
    ];

    const stateAfter = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 2
      }
    ];

    deepFreeze(stateBefore);

    expect(
      basketItems(stateBefore, {
        type: 'ADD_PRODUCT',
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      })
    ).toEqual(stateAfter);
  });

  it('should handle REMOVE_PRODUCT action', () => {
    const stateBefore = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 2
      }
    ];

    const stateAfter = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      }
    ];

    deepFreeze(stateBefore);

    expect(
      basketItems(stateBefore, {
        type: 'REMOVE_PRODUCT',
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      })
    ).toEqual(stateAfter);
  });

  it('should handle REMOVE_PRODUCT action', () => {
    const stateBefore = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      }
    ];

    const stateAfter = [];

    deepFreeze(stateBefore);

    expect(
      basketItems(stateBefore, {
        type: 'REMOVE_PRODUCT',
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      })
    ).toEqual(stateAfter);
  });

  it('should handle ADD_PRODUCT action with multiple products', () => {
    const stateBefore = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      }
    ];

    const stateAfter = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      },
      {
        id: 1,
        name: 'Bread',
        price: 0.8,
        quantity: 1
      }
    ];

    deepFreeze(stateBefore);

    expect(
      basketItems(stateBefore, {
        type: 'ADD_PRODUCT',
        id: 1,
        name: 'Bread',
        price: 0.8,
        quantity: 1
      })
    ).toEqual(stateAfter);
  });

  it('should handle REMOVE_PRODUCT action with multiple products', () => {
    const stateBefore = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      },
      {
        id: 1,
        name: 'Bread',
        price: 0.8,
        quantity: 1
      }
    ];

    const stateAfter = [
      {
        id: 0,
        name: 'Soup',
        price: 0.65,
        quantity: 1
      }
    ];

    deepFreeze(stateBefore);

    expect(
      basketItems(stateBefore, {
        type: 'REMOVE_PRODUCT',
        id: 1,
        name: 'Bread',
        price: 0.8,
        quantity: 1
      })
    ).toEqual(stateAfter);
  });
});
