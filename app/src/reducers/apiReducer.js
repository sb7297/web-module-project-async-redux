import { API_SEND_SUCCESS, API_SEND_FAIL, API_SEND_START } from "../actions/apiActions"

const initialState = {
  sentiments: {},
  error: '',
  sending: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(API_SEND_START):
      return ({
        ...state,
        sending: true
      });
    case(API_SEND_SUCCESS):
      return ({
        ...state,
        sentiments: action.payload,
        sending: false
      });
    case(API_SEND_FAIL):
      return ({
        ...state,
        error: action.payload,
        sending: false
      });
    default:
      return state;
  }
}

export default reducer;