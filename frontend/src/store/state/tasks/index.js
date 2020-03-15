import axios from "axios";

export const GET_TASKS = "GET_TASKS";
export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TASKS_LOADING = "TASKS_LOADING";

export const getTasks = () => dispatch => {
  dispatch(setTasksLoading());
  axios.get("api/tasks").then(res =>
    dispatch({
      type: GET_TASKS,
      payload: res.data
    })
  );
};

export const createTask = taskDetails => dispatch => {
  axios.post("api/tasks", taskDetails).then(res =>
    dispatch({
      type: CREATE_TASK,
      payload: res.data
    })
  );
};

export const deleteTask = id => dispatch => {
  axios.delete(`api/tasks/${id}`).then(res =>
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  );
};

export const setTasksLoading = () => ({
  type: TASKS_LOADING
});
