import { GET_GUESTS, GUESTS_LOADING } from "./index";

const initialState = {
  guests: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GUESTS:
      return {
        ...state,
        guests: action.payload,
        loading: false
      };
    case GUESTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
