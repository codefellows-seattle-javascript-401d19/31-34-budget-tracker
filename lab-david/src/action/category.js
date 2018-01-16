
const uuidv1 = require('uuid/v1');

// create 
export const createAction = ({name}) => ({
  type : 'CATEGORY_CREATE',
  payload : {
    name,
    budgetTotal,
    id: uuidv1(),
    timeStamp: new Date(), 
  }
});

// update 
export const updateAction = (category) => ({
  type : 'CATEGORY_CREATE',
  payload : category,
});

// remove
export const removeAction = (category) => ({
  type : 'CATEGORY_CREATE',
  payload : category,
});