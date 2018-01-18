const emptyState = {};

export default (state = emptyState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpenseList, updatedExpenseList;
  let updatedState;
  switch(type){
    //for category cases the payload is the *category* object
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_DESTROY':
      updatedState = {...state};
      delete updatedState[payload.id];
      return updatedState;
    case 'EXPENSE_CREATE':
      categoryID = payload.categoryID;
      categoryExpenseList = state[categoryID];
      updatedExpenseList = [...categoryExpenseList, payload];
      return {...state, [categoryID]: updatedExpenseList};
    case 'EXPENSE_UPDATE':
      categoryID = payload.categoryID;
      categoryExpenseList = state[categoryID];
      console.log(state, `state`);
      console.log(categoryID, `category id`);
      updatedExpenseList = categoryExpenseList.map(expense => expense.id === payload.id ? payload : expense);
      return {...state, [categoryID] : updatedExpenseList};
    case 'EXPENSE_DESTROY':
      categoryID = payload.categoryID;
      categoryExpenseList = state[categoryID];
      updatedExpenseList = categoryExpenseList.filter(expense => expense.id !== payload.id);
      return {...state, [categoryID] : updatedExpenseList};
    default:
      return state;
  }
};
