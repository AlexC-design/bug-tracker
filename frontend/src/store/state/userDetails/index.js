const FETCH_AUTH = "FETCH_AUTH";
const FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS";
const AUTH_INIT_SUCCESS = 'AUTH_INIT_SUCCESS'

export const ACTIONS = {
  FETCH_AUTH,
  FETCH_AUTH_SUCCESS,
  AUTH_INIT_SUCCESS
};

export const fetchAuth = () => ({
  type: FETCH_AUTH
});

export const fetchAuthSuccess = auth => ({
  type: FETCH_AUTH_SUCCESS,
  payload: auth
});

export const authInitSuccess = () => ({
    type: AUTH_INIT_SUCCESS
})