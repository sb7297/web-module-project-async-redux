import { UPDATE_FORM } from "../actions/formActions";

const initialState = {
  formText: "",
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(UPDATE_FORM):
      return ({
        ...state,
        formText: action.payload
      });
    default:
      return state;
  }
}

export default reducer;