import * as actionTypes from '../constants/actionTypes';

const basketItem = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      if (state.id !== action.id) {
        return state;
      } else {
        return Object.assign({}, state, { quantity: state.quantity + 1 });
      }

    case actionTypes.REMOVE_PRODUCT:
      if (state.id !== action.id) {
        return state;
      } else {
        return Object.assign({}, state, { quantity: state.quantity - 1 });
      }

    default:
      return state;
  }
};

const basketItems = (state = [], action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_BASKET: {
      return [...state, action.basketItems];
    }

    case actionTypes.ADD_PRODUCT:
      if (productLength(state, action) > 0) {
        return state.map(item => basketItem(item, action));
      } else {
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            price: action.price,
            quantity: 1
          }
        ];
      }

    case actionTypes.REMOVE_PRODUCT:
      if (productLength(state, action) > 1) {
        return state.map(item => basketItem(item, action));
      } else {
        return state.filter(item => item.id !== action.id);
      }

    default:
      return state;
  }
};

const productLength = (state, action) => {
  let length;
  if (state.length === 0) return 0;
  state.map(item => item.id === action.id && (length = item.quantity));
  return length || 0;
};

export default basketItems;
