import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

  test('Should return empty state if no known action is inputted', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      dataBagInventory: {},
      dataBagCurrentlySelected: {}
    });
  });

});