import axios from "axios";

export const SELECT_PROJECT = "SELECT_PROJECT";

export const selectProject = id => dispatch => {
  axios.get(`api/projects/${id}`).then(res => {
    console.log(res.data);
    dispatch({
      type: SELECT_PROJECT,
      payload: res.data
    });
  });
};
