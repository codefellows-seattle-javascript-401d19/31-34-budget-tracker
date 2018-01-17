import v1 from 'uuid';

export const createAction = ({ title, price }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    price, 
    id: v1(),
    createdOn: new Date(),
  },
});

export const updateAction = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const removeAction = (category) => ({
  type: 'CATEGORY_REMOVE',
  payload: category,
});
