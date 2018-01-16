
// create 
export const createAction = ({title}) => ({
  type : 'CATEGORY_CREATE',
  payload : {
    title,
    id: Math.random(),
    createdOn: new Date(), 
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