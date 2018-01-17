let uuid = require('uuid/v1');

export const create = ({title, budget}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    budget,
    id: uuid(),
    timestamp: new Date(),
  },
});

export const update = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const destroy = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});
