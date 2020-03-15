import axios from "axios";

export const GET_GUESTS = "GET_GUESTS";
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

export const setGuestsLoading = () => ({
  type: GUESTS_LOADING
});
