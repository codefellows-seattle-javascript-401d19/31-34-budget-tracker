import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import App from './components/app'
import reducer from './reducer'

import { composeWithDevTools } from 'redux-devtools-extension'

let middleware = {}

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
))

store.subscribe(()=> {
  console.log('STATE', store.getState())
})

const container = document.createElement('div')
document.body.appendChild(container)

ReactDom.render(
  <Provider store={store}>
    <App /> 
  </Provider>, container
)