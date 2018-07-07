let emptyState = {};

export default(state = emptyState, action) => {
  let {type, payload} = action;
  let expenseID, updatedState, expenseCategories, updatedCategories, categoryID, updatedExpenses, categoryExpenses;

  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : [] };
    case 'CATEGORY_REMOVE':
    // TODO error checking
      updatedState = {...state};
      delete updatedState[payload.id];
      return updatedState;

    case 'EXPENSE_CREATE':
    // TODO error checking
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = [...categoryExpenses, payload];
      return {...state, [categoryID] : updatedExpenses};

    case 'EXPENSE_UPDATE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses.map(expense => expense.id === payload.id ? payload : expense);
      return {...state, [categoryID] : updatedExpenses};

    case 'EXPENSE_REMOVE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses.filter(expense => expense.id === payload.id ? payload : expense);
      return {...state, [categoryID] : updatedExpenses};

    default:
      return state;
  }
};