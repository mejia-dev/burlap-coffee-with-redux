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

  test('Should confirm that initial state of inventoryListReducer matches rootReducer', () => {
    expect(store.getState().dataBagInventory).toEqual(inventoryListReducer(undefined, { type: null }));
  });
  
  test('Should confirm that initial state of selectedBagReducer matches rootReducer', () => {
    expect(store.getState().dataBagCurrentlySelected).toEqual(selectedBagReducer(undefined, { type: null }));
  });
  
  test('Should confirm that ADD_BAG action works the same between inventoryListReducer and rootReducer', () => {
    const action = {
      type: 'ADD_BAG',
      name: "Arabica",
      origin: "Brazil",
      pricePerPound: 10,
      roast: "light",
      currentPounds: 130,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().dataBagInventory).toEqual(inventoryListReducer({}, action));
  });

  test('Should confirm that SET_BAG action works the same between selectedBagReducer and rootReducer', () => {
    const action = {
      type: 'SET_BAG',
      name: "Arabica",
      origin: "Brazil",
      pricePerPound: 10,
      roast: "light",
      currentPounds: 130,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().dataBagCurrentlySelected).toEqual(selectedBagReducer({}, action));
  });

});