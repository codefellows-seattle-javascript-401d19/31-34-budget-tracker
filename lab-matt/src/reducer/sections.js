const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'EXPENSE_CREATE':
      return [...state, payload];
    
    case 'EXPENSE_UPDATE':
      return state.map((expense) => {
        return expense.id === payload.id ? payload : expense;
      });
  
    case 'EXPENSE_REMOVE':
      return state.filter((expense) => {
        return expense.id !== payload.id;
      });
      
    case 'EXPENSE_CLEAR':
      return emptyState;
      
    default:
      return state;
  }
};