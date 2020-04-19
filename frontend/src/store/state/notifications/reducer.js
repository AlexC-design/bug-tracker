import {
  EMAIL_NOT_FOUND_ON,
  EMAIL_NOT_FOUND_OFF,
  DELETE_PROJECT_ON,
  DELETE_PROJECT_OFF
} from "./index";

const initialState = {
  emailNotFound: null,
  deleteProject: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_NOT_FOUND_ON:
      return {
        ...state,
        emailNotFound: action.payload
      };
    case EMAIL_NOT_FOUND_OFF:
      return {
        ...state,
        emailNotFound: null
      };
    case DELETE_PROJECT_ON:
      return {
        ...state,
        deleteProject: action.payload
      };
    case DELETE_PROJECT_OFF:
      return {
        ...state,
        deleteProject: {}
      };

    default:
      return state;
  }
};
