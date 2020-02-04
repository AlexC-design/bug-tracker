import { combineReducers } from "redux";
import userDetails from "./state/userDetails/reducer";

const reducers = () =>
  combineReducers({
    userDetails
  });

export default reducers;
