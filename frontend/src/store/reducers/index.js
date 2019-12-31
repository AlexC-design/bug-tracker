import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "../state/userDetails/reducer";

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    userDetails: auth
  });

export default reducers;
