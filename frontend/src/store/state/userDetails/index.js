const LOAD_USER_DETAILS = "LOAD_USER_DETAILS";
const SIGN_IN = "SIGN_IN";
const CLEAR_USER_DETAILS = "CLEAR_USER_DETAILS";
const GET_USER_DETAILS = "GET_USER_DETAILS";

export const ACTIONS = {
  LOAD_USER_DETAILS,
  SIGN_IN,
  GET_USER_DETAILS,
  CLEAR_USER_DETAILS
};

export const signIn = () => ({
  type: SIGN_IN
});

export const getUserDetails = auth => ({
  type: GET_USER_DETAILS,
  payload: auth
});

export const loadUserDetails = userDetails => ({
  type: LOAD_USER_DETAILS,
  payload: userDetails
});

export const signOut = () => dispatch => {
  window.gapi.auth2.getAuthInstance().signOut();
  dispatch({ type: CLEAR_USER_DETAILS });
};
