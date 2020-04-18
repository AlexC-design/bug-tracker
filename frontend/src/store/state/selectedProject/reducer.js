import {
  SELECT_PROJECT,
  CREATE_TASK,
  DELETE_TASK,
  PROJECT_LOADING,
  TASK_COMPLETION,
  COMPLETION_LOADING,
  TASK_EDIT,
  EDITING_LOADING,
  CHANGE_COLUMN,
  COLUMN_LOADING,
  ADD_USER,
  REMOVE_USER,
  CLEAR_SELECTED_PROJECT,
  CLEAR_TASKS,
  SET_FILTER
} from "./index";

const initialState = {
  filter: {
    created: false,
    unassigned: false
  },
  completionLoading: false,
  projectLoading: false,
  columnLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        ...action.payload
      };

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

    case CHANGE_COLUMN:
      return {
        ...state,
        tasks: action.payload,
        columnLoading: false
      };

    case COLUMN_LOADING:
      return {
        ...state,
        columnLoading: true
      };

    case PROJECT_LOADING:
      return {
        ...state,
        projectLoading: true
      };

    case ADD_USER:
      return {
        ...state,
        projectMembers: action.payload
      };

    case REMOVE_USER:
      return {
        ...state,
        projectMembers: action.payload
      };

    case CLEAR_TASKS:
      return {
        ...state,
        tasks: {
          High: [],
          Medium: [],
          Low: [],
          Trivial: [],
          Unassigned: []
        }
      };

    case CLEAR_SELECTED_PROJECT:
      return initialState;

    case SET_FILTER:
      const newFilter = { ...state.filter };
      newFilter[`${action.payload.filter}`] = action.payload.filterState;

      return {
        ...state,
        filter: newFilter
      };

    default:
      return state;
  }
};
