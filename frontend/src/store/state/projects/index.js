import axios from "../../../axios";

export const GET_PROJECTS = "GET_PROJECTS";
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";
export const CREATE_PROJECT = "CREATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const PROJECTS_LOADING = "PROJECTS_LOADING";
export const CLEAR_PROJECTS = "CLEAR_PROJECTS";

export const getProjects = userId => dispatch => {
  dispatch(setProjectsLoading());
  axios.get(`api/projects/user/${userId}`).then(res =>
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    })
  );
};

export const getAllProjects = () => dispatch => {
  dispatch(setProjectsLoading());
  axios.get(`api/projects`).then(res =>
    dispatch({
      type: GET_ALL_PROJECTS,
      payload: res.data
    })
  );
};

export const createProject = project => dispatch => {
  axios.post("api/projects", project).then(res =>
    dispatch({
      type: CREATE_PROJECT,
      payload: res.data
    })
  );
};

export const deleteProject = id => dispatch => {
  axios.delete(`api/projects/${id}`).then(res =>
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    })
  );
};

export const clearProjects = () => dispatch => {
  dispatch({
    type: CLEAR_PROJECTS
  });
};

export const setProjectsLoading = () => ({
  type: PROJECTS_LOADING
});
