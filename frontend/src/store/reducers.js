import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userDetails from "./state/userDetails/reducer";

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    userDetails
  });

export default reducers;
