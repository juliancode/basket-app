import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import basketApp from './reducers';
import App from './components/App';

const middleware = [thunk, logger];

let store = createStore(basketApp, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);
