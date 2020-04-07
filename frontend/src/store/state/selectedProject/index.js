import axios from "axios";

export const SELECT_PROJECT = "SELECT_PROJECT";

export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const PROJECT_LOADING = "PROJECT_LOADING";
export const TASK_COMPLETION = "TASK_COMPLETION";
export const COMPLETION_LOADING = "COMPLETION_LOADING";
export const TASK_EDIT = "TASK_EDIT";
export const EDITING_LOADING = "EDITING_LOADING";
export const CHANGE_COLUMN = "CHANGE_COLUMN";
export const COLUMN_LOADING = "COLUMN_LOADING";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

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

export const changeColumn = (
  projectId,
  taskId,
  oldPriority,
  newPriority
) => dispatch => {
  dispatch(setColumnLoading());
  axios
    .put(`api/projects/change-column/${projectId}/${taskId}`, {
      oldPriority,
      newPriority
    })
    .then(res =>
      dispatch({
        type: CHANGE_COLUMN,
        payload: res.data
      })
    );
};

export const setColumnLoading = () => ({
  type: COLUMN_LOADING
});

// ------ MEMBERS ------

export const addUserToProject = (userEmail, projectId) => dispatch => {
  axios.post("api/projects/add-user", { userEmail, projectId }).then(res => {
    dispatch({
      type: ADD_USER,
      payload: res.data
    });
  });
};

export const removeUserFromProject = (userId, projectId) => dispatch => {
  axios.post("api/projects/remove-user", { userId, projectId }).then(res => {
    dispatch({
      type: REMOVE_USER,
      payload: res.data
    });
  });
};
