import { ACTIONS } from "./index";

const { LOAD_USER_DETAILS, CLEAR_USER_DETAILS, USER_DETAILS_LOADING } = ACTIONS;

const initialState = {
  userDetailsLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS:
      
      return {
        ...state,
        ...action.payload,
        userDetailsLoading: false
      };
    case CLEAR_USER_DETAILS:
      return initialState;
    case USER_DETAILS_LOADING:
      
      return {
        ...state,
        userDetailsLoading: true
      };
    default:
      return state;
  }
};
