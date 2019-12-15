import { combineReducers } from "redux";
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({ // You insert reducers inside of this export.
log: logReducer, //log is what we are calling our state
tech: techReducer
}); 
//This is our root reducer