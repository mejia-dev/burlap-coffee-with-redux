const inventoryListReducer = (state = {}, action) => {
  const { name, origin, pricePerPound, roast, currentPounds, id } = action;
  switch (action.type) {
    case 'ADD_BAG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          origin: origin,
          pricePerPound: pricePerPound,
          roast: roast,
          currentPounds: currentPounds,
          id: id
        }
      });
    case 'DELETE_BAG':
      let modifiedState = { ...state };
      delete modifiedState[id];
      return modifiedState;
    default:
      return state;
  }
};

export default inventoryListReducer;