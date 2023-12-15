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

  test("Should return default state if no action is specified", () => {
    expect(inventoryListReducer({}, { type: null })).toEqual({});
  });

  test("Should return default state if no action is specified", () => {
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
    expect(inventoryListReducer({}, { action })).toEqual({
      [id] : {
        name: name,
        origin: origin,
        pricePerPound: pricePerPound,
        roast: roast,
        currentPounds: currentPounds,
        id: id
      }
    });
  });
});