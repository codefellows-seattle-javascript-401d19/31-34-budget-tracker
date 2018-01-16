import uuidv2 from 'uuidv2'

export const createAction = ({name, budget}) => ({
  type: 'CATERGORY_CREATE',
  payload: {
    name,
    budget,
    id: uuidv2(),
    createdOn: new Date(),
  }
})

export const updateAction = (category) => ({
  type : 'CATEGORY_UPDATE',
  payload : category,
})

export const removeAction = (category) => ({
  type : 'CATEGORY_REMOVE',
  payload : category,
})