const selectedBagReducer = (state = {}, action) => {
  const { name, origin, pricePerPound, roast, currentPounds, id } = action;
  switch (action.type) {
    case 'SET_BAG':
      return Object.assign({}, state, {
          name: name,
          origin: origin,
          pricePerPound: pricePerPound,
          roast: roast,
          currentPounds: currentPounds,
          id: id
      });
    default:
      return state;
  }
};

export default selectedBagReducer;