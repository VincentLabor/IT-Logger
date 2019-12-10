import { combineReducers } from "redux";
import logReducer from './logReducer';

export default combineReducers({ // You insert reducers inside of this export.
log: logReducer //log is what we are calling our state
}); 
//This is our root reducer