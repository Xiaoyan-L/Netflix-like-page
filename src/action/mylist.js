const actionTypes = {
  ADD: 'MYLIST_ADD',
  REMOVE: "MYLIST_REMOVE"
};

const setRemove = index => ({
  type: actionTypes.REMOVE,
  index
});

const setAdd = movie => ({
  type: actionTypes.ADD,
  movie
});

export {actionTypes, setRemove, setAdd};