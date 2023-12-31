import selectedBagReducer from "../../reducers/selected-bag-reducer";

describe('selectedBagReducer', () => {

  const sampleBagA = {
    name: "Arabica",
    origin: "Brazil",
    pricePerPound: 10,
    roast: "light",
    currentPounds: 130,
    id: 1
  };
  const sampleBagB = {
    name: "Robusta",
    origin: "India",
    pricePerPound: 6,
    roast: "medium",
    currentPounds: 130,
    id: 2
  };

  test("Should return default state if no action is specified", () => {
    expect(selectedBagReducer({}, { type: null })).toEqual({});
  });

  test("Should set the existing selected bag, replacing any previous value", () => {
    const action = {
      type: 'SET_BAG',
      name: "Arabica",
      origin: "Brazil",
      pricePerPound: 10,
      roast: "light",
      currentPounds: 130,
      id: 1
    }
    expect(selectedBagReducer(sampleBagB, action)).toEqual({
      name: "Arabica",
      origin: "Brazil",
      pricePerPound: 10,
      roast: "light",
      currentPounds: 130,
      id: 1
    });
  });

  test("Should reset the state to be null", () => {
    expect(selectedBagReducer(sampleBagB, {type: 'RESET'})).toEqual(null)
  })
});