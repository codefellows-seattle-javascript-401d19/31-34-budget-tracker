// 'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import categorysReducer from './reducer/categorys';

let store = createStore(categorysReducer);
// console.log(store);
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
