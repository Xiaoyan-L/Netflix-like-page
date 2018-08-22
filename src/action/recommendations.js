const actionTypes = {
  REMOVE: "RECOM_REMOVE"
};

const setRemove = index => ({
  type: actionTypes.REMOVE,
  index
});


export {actionTypes, setRemove};