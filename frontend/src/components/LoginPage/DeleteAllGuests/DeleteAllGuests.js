import React from "react";
import axios from "axios";

export const DeleteAllGuests = () => {
  const deleteGuestAccounts = async () => {
    let ids = await axios
      .get("api/guests")
      .then(res => res.data.map(guest => guest._id));

    ids.forEach(id => {
      axios.delete(`api/guests/${id}`);
    });
  };

  return (
    <div>
      <button onClick={deleteGuestAccounts}>Delete all guests</button>
    </div>
  );
};
