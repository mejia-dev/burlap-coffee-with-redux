import selectedBagReducer from "../../reducers/selected-bag-reducer";

describe('selectedBagReducer', () => {

  test("Should return default state if no action is specified", () => {
    expect(selectedBagReducer({}, { type: null })).toEqual({});
  });
});