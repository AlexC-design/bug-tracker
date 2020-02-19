import { SELECT_PROJECT } from "./index";

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.payload
      };
    default:
      return state;
  }
};
