import bagChangeModeReducer from "../../reducers/bag-change-mode-reducer";

describe('bagChangeModeReducer', () => {

  test("Should return default state if no action is specified", () => {
    expect(bagChangeModeReducer({}, { type: null })).toEqual({});
  });

  test("Should set mode to the defined text, replacing any previous value", () => {
    const action = {
      type: 'SET_CHANGE_MODE',
      mode: "Add"
    }
    expect(bagChangeModeReducer({mode: "Edit"}, action)).toEqual({
      mode: "Add"
    });
  });
});