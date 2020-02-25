import { CREATE_GUEST } from "./index";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_GUEST:
      return {
        ...state,
        currentGuest: action.payload
      };
    default:
      return state;
  }
};
