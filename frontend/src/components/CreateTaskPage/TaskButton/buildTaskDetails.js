export const buildTaskDetails = (taskDetails, creator) => ({
  ...taskDetails,
  task_creator: {
    _id: creator._id,
    name: creator.name
  }
});
