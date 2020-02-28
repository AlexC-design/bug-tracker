import { SELECT_PROJECT } from "./index";

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
