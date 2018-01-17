const emptyState = {};

export default (state = emptyState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpenseList, updatedExpenseList;
  switch(type){
    case 'EXPENSE_CREATE':{
      categoryID = payload.categoryID;
      categoryExpenseList = state[categoryID];
      updatedExpenseList = [...categoryExpenseList, payload];
      return {...state, [categoryID]: updatedExpenseList};
    }
    case 'EXPENSE_UPDATE': {
      categoryID = payload.categoryID;
      categoryExpenseList = state[categoryID];
      updatedExpenseList = categoryExpenseList.map(expense => expense.id === payload.id ? payload : expense);
      return {...state, [categoryID] : updatedExpenseList};
    }
    case 'EXPENSE_DESTROY': {
      categoryID = payload.categoryID;
      categoryExpenseList = state[categoryID];
      updatedExpenseList = categoryExpenseList.filter(expense => expense.id !== payload.id);
      return {...state, [categoryID] : updatedExpenseList};
    }
    default:
      return state;
  }
};
