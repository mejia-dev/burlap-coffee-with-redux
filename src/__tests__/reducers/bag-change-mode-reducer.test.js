import bagChangeModeReducer from "../../reducers/bag-change-mode-reducer";

describe('bagChangeModeReducer', () => {

  test("Should return default state if no action is specified", () => {
    expect(bagChangeModeReducer({}, { type: null })).toEqual({});
  });

});