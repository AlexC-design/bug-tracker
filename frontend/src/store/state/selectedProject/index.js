export const SELECT_PROJECT = "SELECT_PROJECT";

export const selectProject = project => {
  return {
    type: SELECT_PROJECT,
    payload: project
  };
};
