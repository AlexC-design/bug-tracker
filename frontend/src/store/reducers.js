import { combineReducers } from "redux";
import userDetails from "./state/userDetails/reducer";
import projects from "./state/projects/reducer";
import users from "./state/users/reducer";
import selectedProject from "./state/selectedProject/reducer";
import notifications from "./state/notifications/reducer";

const reducers = () =>
  combineReducers({
    userDetails,
    projects,
    users,
    selectedProject,
    notifications
  });

export default reducers;
