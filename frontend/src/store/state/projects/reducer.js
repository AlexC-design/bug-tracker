import {
  GET_PROJECTS,
  CREATE_PROJECT,
  DELETE_PROJECT,
  PROJECTS_LOADING
} from "./index";

const initialState = {
  projects: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.payload
        )
      };
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
