const LOAD_USER_DETAILS = "LOAD_USER_DETAILS";
const SIGN_IN = "SIGN_IN";
const CLEAR_USER_DETAILS = "CLEAR_USER_DETAILS";
const GET_USER_DETAILS = "GET_USER_DETAILS";
const USER_DETAILS_LOADING = "USER_DETAILS_LOADING";

export const ACTIONS = {
  LOAD_USER_DETAILS,
  SIGN_IN,
  GET_USER_DETAILS,
  CLEAR_USER_DETAILS,
  USER_DETAILS_LOADING
};

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const getUserDetails = auth => {
  return {
    type: GET_USER_DETAILS,
    payload: auth
  };
};

export const loadUserDetails = userDetails => {
  return {
    type: LOAD_USER_DETAILS,
    payload: userDetails
  };
};

export const userDetailsLoading = () => {
  return { type: USER_DETAILS_LOADING };
};

export const signOut = () => dispatch => {
  window.gapi.auth2.getAuthInstance().signOut();
  dispatch({ type: CLEAR_USER_DETAILS });
};
