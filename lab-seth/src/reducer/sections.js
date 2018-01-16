const emptyState = [];

export default (state = emptyState, {type, payload}) => {
  switch(type){
    case 'SECTION_CREATE':
      return [...state, payload];

    case 'SECTION_UPDATE':
      return state.map(section => section.id === payload.id ? payload : section);
      
    case 'SECTION_REMOVE':
      return state.filter(section => section.id !== payload.id); //keep everything that is different than the id
      
    case 'SECTION_CLEAR':
      return emptyState;
      
    default: 
      return state;
  }
}