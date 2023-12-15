const selectedBagReducer = (state = false, action) => {
  const { name, origin, pricePerPound, roast, currentPounds, id } = action;
  switch (action.type) {
    case 'SET_BAG':
      const updatedItem = {
        name: name,
        origin: origin,
        pricePerPound: pricePerPound,
        roast: roast,
        currentPounds: currentPounds,
        id: id
      }
      return updatedItem
    default:
      return state;
  }
};

export default selectedBagReducer;