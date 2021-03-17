import { combineReducers } from "redux";
import readingsReducer from './readingsReducer'

const rootReducer = combineReducers({
  readings: readingsReducer,
});

export default rootReducer