import axios from "axios";

export const CREATE_GUEST = "CREATE_GUEST";

export const createGuest = guest => dispatch => {
  axios.post("api/guests", guest).then(res =>
    dispatch({
      type: CREATE_GUEST,
      payload: res.data
    })
  );
};
