export default store => next => action => {
  try{
    let result = next(action);
    let state = store.getState();

    for(let key in state){
      localStorage.setItem(key, JSON.stringify(state[key]));
    }
    return result;
  }catch(error){
    action.error = error;
    return action;
  }
};
