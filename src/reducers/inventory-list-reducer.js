const ticketListReducer = (state = {}, action) => {
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
    default:
      return state;
  }
};

export default ticketListReducer;