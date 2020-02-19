import { combineReducers } from "redux";
import userDetails from "./state/userDetails/reducer";
import projects from "./state/projects/reducer";
import selectedProject from "./state/selectedProject/reducer";

const reducers = () =>
  combineReducers({
    userDetails,
    projects,
    selectedProject
  });

export default reducers;
