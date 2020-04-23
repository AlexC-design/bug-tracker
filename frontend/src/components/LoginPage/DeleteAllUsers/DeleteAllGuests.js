import React from "react";
import axios from "../../../axios";

export const DeleteAllGuests = () => {
  const deleteUserAccounts = async () => {
    let ids = await axios
      .get("api/users/guests")
      .then(res => res.data.map(user => user._id));

    if (ids.length) {
      ids.forEach(id => axios.delete(`api/users/${id}`));

      alert(`Deleted ${ids.length} guests`);
    } else {
      alert("No guest accounts in the DB");
    }
  };

  return (
    <div>
      <button onClick={deleteUserAccounts}>Delete all guests</button>
    </div>
  );
};
