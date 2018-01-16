const create = ({name, budget}) => ({
  type: 'SECTION_CREATE',
  payload: {
    name,
    budget,
  },
});
