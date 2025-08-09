import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import themeReducer from "./themeReducer";
import homeReducer from "./homeReducer";
import clipReducer from "./clipReducer";
export default combineReducers({
  errors: errorReducer,
  themeMode: themeReducer,
  homeData: homeReducer,
  clipMode: clipReducer,
});
