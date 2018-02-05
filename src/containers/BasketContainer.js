import { connect } from 'react-redux';
import Basket from '../components/Basket';

const mapStateToProps = state => {
  let total = 0;
  state.basketItems.map(item => {
    return (total += item.price * item.quantity);
  });

  return {
    basketItems: state.basketItems,
    basketTotal: total
  };
};

const BasketContainer = connect(mapStateToProps)(Basket);

export default BasketContainer;
