import inventoryListReducer from "../../reducers/inventory-list-reducer";

describe('inventoryListReducer', () => {
  const sampleBag = {
    name: "Arabica",
    origin: "Brazil",
    pricePerPound: 10,
    roast: "light",
    currentPounds: 130,
    id: 1
  };
  const sampleStateForDeletion = {
    1: {
      name: "Bag1",
      id: 1
    },
    2: {
      name: "Bag2",
      id: 2
    }
  }

  test("Should return default state if no action is specified", () => {
    expect(inventoryListReducer({}, { type: null })).toEqual({});
  });

  test("Should add a bag to inventory", () => {
    const { name, origin, pricePerPound, roast, currentPounds, id } = sampleBag;
    const action = {
      type: 'ADD_BAG',
      name: name,
      origin: origin,
      pricePerPound: pricePerPound,
      roast: roast,
      currentPounds: currentPounds,
      id: id
    }
    expect(inventoryListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        origin: origin,
        pricePerPound: pricePerPound,
        roast: roast,
        currentPounds: currentPounds,
        id: id
      }
    });
  });

  test("Should remove a bag from inventory", () => {
    const action = {
      type: 'DELETE_BAG',
      id: 1
    }
    expect(inventoryListReducer(sampleStateForDeletion, action)).toEqual({
      2: {
        name: "Bag2",
        id: 2
      }
    });
  });
});