import authReducer from "./authReducer";
import otherReducer from "./otherReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  auth: authReducer,
  other: otherReducer,
});

export default allReducers;
