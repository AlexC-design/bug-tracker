import { EMAIL_NOT_FOUND_ON, EMAIL_NOT_FOUND_OFF } from "./index";

const initialState = {
  emailNotFound: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_NOT_FOUND_ON:
      return {
        ...state,
        emailNotFound: action.payload
      };
    case EMAIL_NOT_FOUND_OFF:
      return {
        ...state,
        emailNotFound: null
      };

    default:
      return state;
  }
};
