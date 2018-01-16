'use strict';

const {createStore} = require('redux');

const DEFAULT_STATE = 0;

let simpleReducer = (state = DEFAULT_STATE, action) => {
  let {type, payload} = action;
  // let{type} = action;

  switch(type) {
    case 'INCREMENT_COUNTER':
      return state + payload;
    case 'DECREMENT_COUNTER':
      return state - payload;
    default :
      return state;
  }
};

//State: all the information we store in the application to be able to interact with a user



// let state = simpleReducer(undefined, {type:undefined});
// console.log(state);
//
// state = simpleReducer(state, {type: 'INCREMENT_COUNTER'});
// console.log({state});
//
// state = simpleReducer(state, {type: 'INCREMENT_COUNTER'});
// console.log({state});


let customStore = createStore(simpleReducer);
console.log(customStore.getState());

customStore.dispatch({type: 'INCREMENT_COUNTER' , payload : 5});
console.log(customStore.getState());
console.log(customStore.getState());
