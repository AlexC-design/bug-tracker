import React from "react";
import memberIcon from "../../../assets/svg/member-icon.svg";

import "./css/member-card.css";

export const MemberCard = () => {
  return (
    <div className="member-card">
      <img className="member-card__icon" src={memberIcon} />
      <div className='member-card__details'>
        <div className='member-card__details__name'>Member Name</div>
        <div className='member-card__details__date'>Date Joined</div>
      </div>
      <div>MemberCard</div>
    </div>
  );
};
