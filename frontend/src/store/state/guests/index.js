import axios from "axios";

export const GET_GUESTS = "GET_GUESTS";
export const DELETE_GUEST = "DELETE_GUEST";
export const GUESTS_LOADING = "GUESTS_LOADING";

export const getGuests = () => dispatch => {
  dispatch(setGuestsLoading());
  axios.get("api/guests").then(res =>
    dispatch({
      type: GET_GUESTS,
      payload: res.data
    })
  );
};

export const deleteGuest = id => dispatch => {
  axios.delete(`api/guests/${id}`).then(res =>
    dispatch({
      type: DELETE_GUEST,
      payload: id
    })
  );
};

export const setGuestsLoading = () => ({
  type: GUESTS_LOADING
});
