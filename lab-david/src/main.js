'use strict'; 

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import './style/main.scss';

let middleware = {};
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, container);