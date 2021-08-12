import { combineReducers } from "redux";

import formReducer from './formReducer';
import apiReducer from './apiReducer';

export default combineReducers({
  formReducer,
  apiReducer
})