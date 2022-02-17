import postsReducer from "./postReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  postsReducer,
});

export default rootReducer;
