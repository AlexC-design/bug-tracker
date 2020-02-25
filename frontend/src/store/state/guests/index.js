import axios from "axios";

export const CREATE_GUEST = "CREATE_GUEST";

export const createGuest = guest => dispatch => {
  axios.post("api/guests", guest).then(res => {
    console.log(res.data.guest_name);
    dispatch({
      type: CREATE_GUEST,
      payload: res.data.guest_name
    });
  });
};
