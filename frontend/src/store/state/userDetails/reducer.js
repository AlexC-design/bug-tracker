import { ACTIONS } from "./index";

const { FETCH_AUTH_SUCCESS } = ACTIONS;

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_AUTH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
