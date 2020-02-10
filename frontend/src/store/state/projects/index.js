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

export const createProject = projectDetails => ({
  type: CREATE_PROJECT,
  payload: projectDetails
});

export const deleteProject = projectId => ({
  type: DELETE_PROJECT,
  payload: projectId
});

export const setProjectsLoading = () => ({
  type: PROJECTS_LOADING
});
