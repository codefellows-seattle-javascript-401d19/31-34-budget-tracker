'use strict'; 

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import categoriesReducer from './reducer/categories';
import {composeWithDevTools} from 'redux-devtools-extension';

import './style/main.scss';

let middleware = {};
const store = createStore(categoriesReducer,composeWithDevTools(applyMiddleware(...middleware)
));

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, container);
