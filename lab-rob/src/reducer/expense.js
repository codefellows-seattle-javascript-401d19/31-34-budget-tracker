let emptyState = {};

export default (state = emptyState, {type, payload}) => {
  let extractIf = {
    EXPENSE_CREATE: true,
    EXPENSE_UPDATE: true,
    EXPENSE_REMOVE: true,
  };

  let categoryId = null, categoryExpenses = null, updatedExpenses = null, updatedState = null;

  if(extractIf[type]) {
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
  }

  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]: []};
    case 'CATEGORY_DESTROY': {
      let updatedState = {...state};
      delete updatedState[payload.id];
      return updatedState;
    }
    case 'EXPENSE_CREATE':
      updatedExpenses = [...categoryExpenses, payload];
      return {...state, [categoryId]: updatedExpenses};
    case 'EXPENSE_UPDATE':
      updatedExpenses = categoryExpenses.map(expense => expense.id === payload.id ? payload : expense);
      return {...state, [categoryId]: updatedExpenses};
    case 'EXPENSE_DESTROY':
      updatedExpenses = categoryExpenses.filter(expense => expense.id !== payload.id);
      return {...state, [categoryId]: updatedExpenses};
    default:
      return state;
  }
};