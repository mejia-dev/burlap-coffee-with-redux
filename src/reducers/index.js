import inventoryListReducer from "./inventory-list-reducer";
import selectedBagReducer from "./selected-bag-reducer";
import bagChangeModeReducer from "./bag-change-mode-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dataBagInventory: inventoryListReducer,
  dataBagCurrentlySelected: selectedBagReducer,
  displayBagChangeMode: bagChangeModeReducer,
})

export default rootReducer;