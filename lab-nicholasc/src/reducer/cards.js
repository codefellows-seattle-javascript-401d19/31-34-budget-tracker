const emptyState = {};

export default (state = emptyState, {type, payload}) => {
  switch(type){
    case 'SECTION_CREATE':
    case 'SECTION_UPDATE':
    case 'CARD_CREATE':
      return [...state, payload];
    case 'CARD_UPDATE':
      return state.map(category => category.id === payload.id ? payload : category);
    case 'CARD_REMOVE':
      return state.filter(category => category.id !== payload.id);
    case 'CARD_CLEAR':
      return emptyState;
    default:
      return state;
  }
};
