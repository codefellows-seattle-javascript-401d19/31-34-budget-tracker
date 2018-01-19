import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import './style/reset.scss';
import './style/main.scss';

import App from './component/app';
import reducer from './reducer';

import session from './lib/redux-session';
import reporter from './lib/redux-reporter';

let store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(reporter, session)
  )
);

store.subscribe(() => {
  console.log('__STATE__', store.getState());
});


const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>, container);