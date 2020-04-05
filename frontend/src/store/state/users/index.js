import axios from "axios";

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const USERS_LOADING = "USERS_LOADING";

export const getUsers = () => dispatch => {
  dispatch(setUsersLoading());
  axios.get("api/users").then(res =>
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  );
};

export const deleteUser = id => dispatch => {
  axios.delete(`api/users/${id}`).then(res =>
    dispatch({
      type: DELETE_USER,
      payload: id
    })
  );
};

export const setUsersLoading = () => ({
  type: USERS_LOADING
});
