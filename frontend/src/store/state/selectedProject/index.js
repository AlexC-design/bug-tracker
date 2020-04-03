import axios from "axios";

export const SELECT_PROJECT = "SELECT_PROJECT";

export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const PROJECT_LOADING = "PROJECT_LOADING";
export const TASK_COMPLETION = "TASK_COMPLETION";
export const COMPLETION_LOADING = "COMPLETION_LOADING";
export const TASK_EDIT = "TASK_EDIT";
export const EDITING_LOADING = "EDITING_LOADING";

// ------ PROJECT ------

export const selectProject = id => dispatch => {
  axios.get(`api/projects/${id}`).then(res => {
    dispatch({
      type: SELECT_PROJECT,
      payload: res.data
    });
  });
};

export const setProjectLoading = () => ({
  type: PROJECT_LOADING
});

// ------- TASKS -------

export const createTask = (taskDetails, projectId) => dispatch => {
  axios.put(`api/projects/${projectId}`, taskDetails).then(res =>
    dispatch({
      type: CREATE_TASK,
      payload: res.data
    })
  );
};

export const deleteTask = (projectId, taskPriority, taskId) => dispatch => {
  axios
    .delete(`api/projects/${projectId}/${taskPriority}/${taskId}`)
    .then(res =>
      dispatch({
        type: DELETE_TASK,
        payload: res.data
      })
    );
};

export const taskCompletion = (projectId, taskPriority, taskId) => dispatch => {
  dispatch(setCompletionLoading());
  axios
    .put(`api/projects/completion/${projectId}/${taskPriority}/${taskId}`)
    .then(res =>
      dispatch({
        type: TASK_COMPLETION,
        payload: res.data
      })
    );
};

export const setCompletionLoading = () => ({
  type: COMPLETION_LOADING
});

export const taskEdit = (
  projectId,
  taskPriority,
  taskId,
  taskDetails
) => dispatch => {
  dispatch(setEditingLoading());
  axios
    .put(`api/projects/edit/${projectId}/${taskPriority}/${taskId}`, {
      ...taskDetails
    })
    .then(res =>
      dispatch({
        type: TASK_EDIT,
        payload: res.data
      })
    );
};

export const setEditingLoading = () => ({
  type: EDITING_LOADING
});
