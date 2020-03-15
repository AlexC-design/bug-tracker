import React from "react";
import memberIcon from "../../../assets/svg/member-icon.svg";
import { DeleteButton } from "../../DeleteButton/DeleteButton";
import { dateFormatting } from "./dateFormatting";

import "./css/member-card.css";

export const MemberCard = ({ name, date }) => {
  const formattedDate = dateFormatting(date);

  return (
    <div className="member-card">
      <img className="member-card__icon" src={memberIcon} />
      <div className="member-card__details">
        <div className="member-card__details__name">{name}</div>
        <div className="member-card__details__date">Joined: {formattedDate}</div>
      </div>
      <DeleteButton />
    </div>
  );
};
