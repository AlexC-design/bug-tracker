import axios from "axios";

export const GET_PROJECTS = "GET_PROJECTS";
export const CREATE_PROJECT = "CREATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const PROJECTS_LOADING = "PROJECTS_LOADING";

export const getProjects = () => dispatch => {
  dispatch(setProjectsLoading());
  axios.get("api/projects").then(res =>
    dispatch({
      type: GET_PROJECTS,
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

export const setProjectsLoading = () => ({
  type: PROJECTS_LOADING
});
