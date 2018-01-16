const emptyState = [];

export default (state = emptyState, {type, payload}) => {
  switch(type){
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(category => {
        if(category.id == payload.id){
          return payload;
        }else{
          return category;
        }
      });
    case 'CATEGORY_REMOVE':
      return state.filter(category => {
        if(category.id !== payload.id){
          return category;
        }
      });
    default:
      return state;
  }
};
