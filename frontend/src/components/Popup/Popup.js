import React from "react";
import _ from "lodash";

import "./css/popup.css";

export const Popup = ({ text, buttons }) => {
  console.log("popup");
  return (
    <div className="popup">
      <div className="popup__card">
        <div className="popup__card__text">{text}</div>
        <div className="popup__card__buttons-container">
          {buttons.map(button => (
            <button
              onClick={button.action}
              className={`popup__card__button popup__card__button--${button.text}`}
              key={_.uniqueId("button_")}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
      <div className="popup__background" />
    </div>
  );
};
