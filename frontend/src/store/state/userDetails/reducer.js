import { ACTIONS } from "./index";

const { FETCH_AUTH_SUCCESS, CLEAR_USER_DETAILS } = ACTIONS;

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_AUTH_SUCCESS:
      return action.payload;
    case CLEAR_USER_DETAILS:
      return {};
    default:
      return state;
  }
};
