import axios from 'axios';

export const API_SEND_START = "API_SEND_START";
export const API_SEND_SUCCESS = "API_SEND_SUCCESS";
export const API_SEND_FAIL = "API_SEND_FAIL";

export const sendText = (text) => dispatch => {
  dispatch({ type: API_SEND_START });
  axios.post("https://sentim-api.herokuapp.com/api/v1/", {
    text: text
  })
    .then(resp => {
      dispatch({ type: API_SEND_SUCCESS, payload: resp.data });
    })
    .catch(err => {
      dispatch({ type: API_SEND_FAIL, payload: err });
    })
};