import v1 from 'uuid';

export const createAction = ({ title, price, categoryID }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    title,
    price, 
    id: v1(),
    categoryID,
    timestamp: new Date(),
  },
});

export const updateAction = (category) => ({
  type: 'EXPENSE_UPDATE',
  payload: category,
});

export const removeAction = (category) => ({
  type: 'EXPENSE_REMOVE',
  payload: category,
});
