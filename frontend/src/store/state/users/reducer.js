import { GET_USERS, USERS_LOADING, DELETE_USER, CLEAR_USERS } from "./index";

const initialState = {
  users: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload)
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
