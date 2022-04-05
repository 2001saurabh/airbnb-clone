import { combineReducers } from "redux";
import listReducer from "./list/reducer";

export const rootReducer = combineReducers({
  list: listReducer,
});
