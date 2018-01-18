// 'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

let middleware = {};
let store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)
));

//-------------
// Nicholas - state displayer from lecture
//-------------
store.subscribe(() => {
  console.log('__STATE__', store.getState());
});
//-------------

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store = {store}>
    <App />
  </Provider>, container);
