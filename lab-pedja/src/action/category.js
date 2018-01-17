import uuid from "uuid";

export const createAction = ({name, budget}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    id: uuid.v1(),
    timestamp: new Date(),
    name,
    budget
  }
});

export const updateAction = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const destroyAction = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});
