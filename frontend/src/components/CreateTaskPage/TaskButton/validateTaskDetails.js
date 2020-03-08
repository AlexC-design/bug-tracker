export const validateTaskDetails = taskDetails => {
  if (taskDetails.taskName === "") {
    return "You must enter a task name";
  }
  if (taskDetails.taskSeverity === "") {
    return "You must select a task severity level";
  }
  if (taskDetails.taskSummary === "") {
    return "You must enter a task summary";
  }
  if (taskDetails.taskDescription === "") {
    return "You must enter a task description";
  }
  if (taskDetails.environment === "Select") {
    return "You must select an environment";
  }
  return "valid";
};
