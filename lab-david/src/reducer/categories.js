
const emptyState = [];

export default (state = emptyState, {type, payload}) => {
  // assume that the payload is a category
  switch(type){
    case 'CATEGORY_REMOVE_CREATE':
      return [...state,payload];
    case 'CATEGORY_REMOVE_UPDATE':
      return state.map(category => category.id === payload.id ? payload : category);
    case 'CATEGORY_REMOVE':
      return state.filter(category => category.id !== payload.id);
    case 'CATEGORY_REMOVE_CLEAR':
      return emptyState;
    default: 
      return state;
  }  

};