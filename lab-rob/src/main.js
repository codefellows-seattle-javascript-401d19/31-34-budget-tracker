import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import categoryReducer from './reducer/category';

let store = createStore(categoryReducer);

store.subscribe(() => {
  console.log('__STATE__', store.getState());
});

let container = document.createElement('main');
document.body.appendChild(container);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, container
);