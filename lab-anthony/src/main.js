import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import './style/main.scss';

import App from './component/app';
import reducer from './reducer';

import {composeWithDevTools} from 'redux-devtools-extension';

let middleware = {};
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,container);
