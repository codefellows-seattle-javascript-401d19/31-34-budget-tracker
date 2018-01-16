
// create 
export const createAction = ({title}) => ({
  type : 'SECTION_CREATE',
  payload : {
    title,
    id: Math.random(),
    createdOn: new Date(), 
  }
});

// update 
export const updateAction = (section) => ({
  type : 'SECTION_UPDATE',
  payload : section,
});

// remove
export const removeAction = (section) => ({
  type : 'SECTION_REMOVE',
  payload : section,
});