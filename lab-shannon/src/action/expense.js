const uuid = require('uuid/v1');

export const create = ({name, price, categoryID}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryID,
    id : uuid(),
    timestamp : new Date(),
  },
});

export const update = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const destroy = (expense) => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});
