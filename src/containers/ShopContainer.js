import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../actions';
import Shop from '../components/Shop';

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: (id, name, price, quantity) => {
      dispatch(addProduct(id, name, price, quantity));
    },
    onRemoveProduct: (id, name, price, quantity) => {
      dispatch(removeProduct(id, name, price, quantity));
    }
  };
};

const mapStateToProps = state => ({
  products: state.products
});

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;
