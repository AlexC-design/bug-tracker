import React from "react";
import { connect } from "react-redux";

import "./css/popup.css";

export const Popup = ({ text, action }) => {
  return (
    <div className="popup">
      <div className="popup__card">
        <div className="popup__card__text">{text}</div>
        <button onClick={action} className="popup__card__button">
          OK
        </button>
      </div>
      <div className="popup__background" />
    </div>
  );
};

const mapStateToProps = state => ({
  test: state.notifications
});

export default connect(mapStateToProps, null)(Popup);
