const FETCH_AUTH = "FETCH_AUTH";
const FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS";
const AUTH_INIT_SUCCESS = "AUTH_INIT_SUCCESS";
const CLEAR_USER_DETAILS = "CLEAR_USER_DETAILS";

export const ACTIONS = {
  FETCH_AUTH,
  FETCH_AUTH_SUCCESS,
  AUTH_INIT_SUCCESS,
  CLEAR_USER_DETAILS
};

export const fetchAuth = () => ({
  type: FETCH_AUTH
});

export const authInitSuccess = () => ({
  type: AUTH_INIT_SUCCESS
});

export const fetchAuthSuccess = userDetails => ({
  type: FETCH_AUTH_SUCCESS,
  payload: userDetails
});

export const clearUserDetails = () => ({ type: CLEAR_USER_DETAILS });
