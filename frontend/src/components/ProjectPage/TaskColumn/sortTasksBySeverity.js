export const sortTasksBySeverity = tasks => {
  let sortedTasks = [...tasks].sort(
    (task1, task2) => task1.taskSeverity - task2.taskSeverity
  );

  let sortedTasksCompleted = [];

  for (let i = 0; i < sortedTasks.length; i++) {
    if (sortedTasks[i].taskCompleted) {
      sortedTasksCompleted.push(sortedTasks[i]);
      sortedTasks.splice(i, 1);
      i--;
    }
  }

  return [sortedTasks, sortedTasksCompleted];
};
