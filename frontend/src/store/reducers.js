import { combineReducers } from "redux";
import userDetails from "./state/userDetails/reducer";
import projects from "./state/projects/reducer";

const reducers = () =>
  combineReducers({
    userDetails,
    projects
  });

export default reducers;
