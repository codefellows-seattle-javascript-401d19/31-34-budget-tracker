const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryID, categoryExpenses, updatedExpenses;

  switch (type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};

    case 'CATEGORY_DESTROY':
      let updatedState = {...state};
      delete updatedState[payload.id];
      
      return updatedState;

    case 'EXPENSE_CREATE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = [...categoryExpenses, payload];

      return {...state, [categoryID] : updatedExpenses};

    case 'EXPENSE_UPDATE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses
        .map(expense => expense.id === payload.id ? payload : item);

      return {...state, [categoryID] : updatedExpenses};

    case 'EXPENSE_DESTROY':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses
        .filter(expense => expense.id !== payload.id);

      return {...state, [categoryID] : updatedExpenses};
    
    default:
      return state;
  }
};