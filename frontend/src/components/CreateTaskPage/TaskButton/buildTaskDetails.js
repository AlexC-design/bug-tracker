export const buildTaskDetails = (taskDetails, creator) => ({
  task_name: taskDetails.taskName,
  task_severity: taskDetails.taskSeverity,
  task_summary: taskDetails.taskSummary,
  task_description: taskDetails.taskDescription,
  task_environment: taskDetails.environment,
  task_creator: {
    _id: creator._id,
    name: creator.name
  }
});
