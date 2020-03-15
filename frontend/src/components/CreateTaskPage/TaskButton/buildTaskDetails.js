export const buildTaskDetails = (taskDetails, creator) => ({
  ...taskDetails,
  taskCreator: {
    _id: creator._id,
    name: creator.name
  }
});
