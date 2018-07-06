import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import './style/main.scss';

import App from './component/app';
import categoriesReducer from './reducer/categories.js';

let store = createStore(categoriesReducer, applyMiddleware(logger));

// show state

store.subscribe(() => {
  console.log('__STATE__',store.getState());
});

//

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,container);
