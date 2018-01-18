import React  from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./component/app";
import categoryReducer from './reducer/categories.js';

let middleware = {};
const store = createStore(categoryReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

store.subscribe(() => {
  console.log('__STATE__', store.getState());
});

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,container);