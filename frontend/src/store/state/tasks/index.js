import axios from "axios";

export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TASKS_LOADING = "TASKS_LOADING";

export const createTask = (taskDetails, projectId) => dispatch => {
  axios.put(`api/projects/${projectId}`, taskDetails).then(res =>
    dispatch({
      type: CREATE_TASK,
      payload: res.data
    })
  );
};

export const deleteTask = ({ projectId, taskSeverity, taskId }) => dispatch => {
  axios.delete(`/${projectId}/${taskSeverity}/${taskId}`).then(res =>
    dispatch({
      type: DELETE_TASK,
      payload: { projectId, taskSeverity, taskId }
    })
  );
};

export const setTasksLoading = () => ({
  type: TASKS_LOADING
});
