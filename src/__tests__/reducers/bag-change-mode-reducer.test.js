import bagChangeModeReducer from "../../reducers/bagChangeModeReducer";

describe('bagChangeModeReducer', () => {

  test("Should return default state if no action is specified", () => {
    expect(bagChangeModeReducer({}, { type: null })).toEqual({});
  });

});