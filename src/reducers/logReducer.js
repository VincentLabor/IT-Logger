import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG
} from '../actions/types'

const initialState = {
  //The initial state is created within the reducer. There is no state file like context
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs,action.payload], //immute state so we spread the array and add the log to the array
        loading: false
      };
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
