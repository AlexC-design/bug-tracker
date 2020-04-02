import {
  SELECT_PROJECT,
  CREATE_TASK,
  DELETE_TASK,
  PROJECT_LOADING,
  TASK_COMPLETION
} from "./index";

const initialState = {
  selectedProject: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.payload;
    case CREATE_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case TASK_COMPLETION:
      return {
        ...state,
        tasks: action.payload
      };
    case PROJECT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
