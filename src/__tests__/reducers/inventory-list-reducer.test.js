import inventoryListReducer from "../../reducers/inventory-list-reducer";

describe('inventoryListReducer', () => {
  test("Should return default state if no action is specified", () => {
    expect(inventoryListReducer({}, {type: null})).toEqual({});
  });
});