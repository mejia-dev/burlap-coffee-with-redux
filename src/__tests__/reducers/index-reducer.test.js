import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import inventoryListReducer from "../../reducers/inventory-list-reducer";
import selectedBagReducer from "../../reducers/selected-bag-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return empty state if no known action is inputted', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      dataBagInventory: {},
      dataBagCurrentlySelected: {}
    });
  });

  test('Check that initial state of inventoryListReducer matches root reducer', () => {
    expect(store.getState().dataBagInventory).toEqual(inventoryListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of selectedBagReducer matches root reducer', () => {
    expect(store.getState().dataBagCurrentlySelected).toEqual(selectedBagReducer(undefined, { type: null }));
  });

});