import { ACTIONS } from "./index";

const { LOAD_USER_DETAILS, CLEAR_USER_DETAILS } = ACTIONS;

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS:
      return action.payload;
    case CLEAR_USER_DETAILS:
      return {};
    default:
      return state;
  }
};
