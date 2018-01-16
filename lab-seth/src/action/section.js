import uuid from 'uuid/v1';

export const createAction = ({name, budget}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    id: uuid(),
    timeStamp: new Date(),
    name,
    budget,
  },
});
export const updateAction = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: {category},
});
export const removeAction = (category) => ({
  type: 'CATEGORY_REMOVE',
  payload: {category},
});
