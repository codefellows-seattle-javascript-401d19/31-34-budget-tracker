import uuidv1 from 'uuid/v1';

export const createAction = ({name, price, category}) => ({
  type: 'EXPENSE_CREATE',
  payload : {
    name,
    price,
    categoryID : category.id,
    id: uuidv1(),
    timeStamp: new Date(),
  },
});

export const updateAction = (expense) => ({
  type : 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeAction = (expense) => ({
  type : 'EXPENSE_REMOVE',
  payload: expense,
});
