import React from "react";
import plusSign from "../../assets/svg/plus-icon.svg";

import "./css/delete-button.css";

export const DeleteButton = ({ clickEvent }) => {
  return (
    <button onClick={event => console.log(event)} className="delete-button">
      <img src={plusSign} className="delete-button__cross" alt="cross" />
    </button>
  );
};
