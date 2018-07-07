import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/app'
import categoryReducer from './reducer/catergories'

let store = createStore(categoryReducer)

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