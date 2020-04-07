export const isUserAdmin = (userId, projectMembers) => {
  let result = false;

  if (projectMembers) {
    projectMembers.forEach(member => {
      if (member.userId === userId) {
        if (member.isAdmin) {
          result = true;
        }
      }
    });
  }

  return result;
};
