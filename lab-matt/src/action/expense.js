import v1 from 'uuid';

export const createAction = ({ title, price }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    title,
    price, 
    id: v1(),
    createdOn: new Date(),
  },
});

export const updateAction = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeAction = (expense) => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});
