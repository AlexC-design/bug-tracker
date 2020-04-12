import { isUserAdmin } from "../../utils/isUserAdmin";

export const sortUsers = (users, userId, project) => {
  let adminNo = 0;
  let me = null;

  for (let i = 0; i < users.length; i++) {
    //find current user

    if (users[i]._id === userId) {
      me = users[i];
      users.splice(i, 1);
      i--;
    }
    //move all admins to start
    else if (isUserAdmin(users[i]._id, project.projectMembers)) {
      let userToMove = users[i];
      users.splice(i, 1);
      users.unshift(userToMove);
      adminNo++;
    }
  }

  //place current user
  if (me) {
    isUserAdmin(me._id, project.projectMembers)
      ? users.unshift(me)
      : users.splice(adminNo, 0, me);
  }

  return users;
};
