import React, { Component } from 'react';
import BasketContainer from '../containers/BasketContainer';
import ShopContainer from '../containers/ShopContainer';
// import { fetchBasket } from '../actions';

class App extends Component {
  // started implementing way of fetching basket data from api but ran out of time
  // componentDidMount() {
  //   const { dispatch } = this.props;

  //   dispatch(fetchBasket());
  // }

  render() {
    return (
      <div>
        <ShopContainer />
        <BasketContainer />
      </div>
    );
  }
}

export default App;
