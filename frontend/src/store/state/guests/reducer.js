import { GET_GUESTS, GUESTS_LOADING, DELETE_GUEST } from "./index";

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
    case DELETE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(guest => guest._id !== action.payload)
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
