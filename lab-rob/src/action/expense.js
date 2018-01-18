import uuid from 'uuid/v1';

export const createAction = ({name, price, categoryId}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryId,
    timestamp: new Date(),
    id: uuid(),
  },
});

export const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const destroyAction = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});

export const clearAction = () => ({
  type: 'EXPENSE_CLEAR',
});