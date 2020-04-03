import {
  SELECT_PROJECT,
  CREATE_TASK,
  DELETE_TASK,
  PROJECT_LOADING,
  TASK_COMPLETION,
  COMPLETION_LOADING,
  TASK_EDIT,
  EDITING_LOADING
} from "./index";

const initialState = {
  selectedProject: {},
  completionLoading: false,
  projectLoading: false
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
        tasks: action.payload,
        completionLoading: false
      };

    case COMPLETION_LOADING:
      return {
        ...state,
        completionLoading: true
      };

    case TASK_EDIT:
      return {
        ...state,
        tasks: action.payload,
        editingLoading: false
      };

    case EDITING_LOADING:
      return {
        ...state,
        editingLoading: true
      };

    case PROJECT_LOADING:
      return {
        ...state,
        projectLoading: true
      };

    default:
      return state;
  }
};
