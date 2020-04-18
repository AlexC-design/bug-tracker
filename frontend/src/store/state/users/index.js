import axios from "axios";

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const USERS_LOADING = "USERS_LOADING";
export const CLEAR_USERS = "CLEAR_USERS";

export const getUsers = projectId => dispatch => {
  dispatch(setUsersLoading());
  axios.get(`api/users/project${projectId}`).then(res =>
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

export const clearUsers = () => ({
  type: CLEAR_USERS
});

export const setUsersLoading = () => ({
  type: USERS_LOADING
});
