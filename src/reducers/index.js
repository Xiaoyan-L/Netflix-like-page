import {combineReducers} from "redux";
import mylist from "./mylist";
import recommendations from "./recommendations";

const rootReducer = combineReducers({
  mylist,
  recommendations
});

export default rootReducer;