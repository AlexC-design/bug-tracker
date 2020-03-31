import { GET_TASKS, CREATE_TASK, DELETE_TASK, TASKS_LOADING } from "./index";

const initialState = {
  tasks: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      };
    case TASKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
