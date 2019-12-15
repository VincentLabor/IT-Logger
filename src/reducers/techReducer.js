import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload], //You want to remember to be specific here or else you will return the whole entire state.
        loading: false
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
      case SET_LOADING:
        return{
          ...state,
          loading: true
        }
    default:
      return state;
  }
};
