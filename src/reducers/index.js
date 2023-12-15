import inventoryListReducer from "./inventory-list-reducer";
import selectedBagReducer from "./selected-bag-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dataBagInventory: inventoryListReducer,
  dataBagCurrentlySelected: selectedBagReducer,
})

export default rootReducer;