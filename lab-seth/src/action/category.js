import uuid from 'uuid/v1';

export const createAction = ({name, budget}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    budget,
    id: uuid(),
    timeStamp: new Date(),
  },
});
export const updateAction = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});
export const removeAction = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});
