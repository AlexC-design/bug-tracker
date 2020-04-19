export const EMAIL_NOT_FOUND_ON = "EMAIL_NOT_FOUND_ON";
export const EMAIL_NOT_FOUND_OFF = "EMAIL_NOT_FOUND_OFF";
export const DELETE_PROJECT_ON = "DELETE_PROJECT_ON";
export const DELETE_PROJECT_OFF = "DELETE_PROJECT_OFF";

// ------ EMAIL NOT FOUND ------

export const emailNotFoundOn = email => ({
  type: EMAIL_NOT_FOUND_ON,
  payload: email
});

export const emailNotFoundOff = () => dispatch => {
  dispatch({
    type: EMAIL_NOT_FOUND_OFF
  });
};

// ------ DELETE PROJECT CONFIRMATION ------

export const deleteProjectOn = (projectId, projectName) => dispatch => {
  dispatch({
    type: DELETE_PROJECT_ON,
    payload: { projectId, projectName }
  });
};

export const deleteProjectOff = () => dispatch => {
  dispatch({
    type: DELETE_PROJECT_OFF
  });
};
