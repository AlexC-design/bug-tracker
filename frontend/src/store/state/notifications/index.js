export const EMAIL_NOT_FOUND_ON = "EMAIL_NOT_FOUND_ON";
export const EMAIL_NOT_FOUND_OFF = "EMAIL_NOT_FOUND_OFF";

// ------ EMAIL NOT FOUND ------

export const emailNotFoundOn = email => dispatch => {
  dispatch({
    type: EMAIL_NOT_FOUND_ON,
    payload: email
  });
};

export const emailNotFoundOff = () => dispatch => {
  dispatch({
    type: EMAIL_NOT_FOUND_OFF
  });
};
