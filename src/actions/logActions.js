import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// export const getLogs = () => {
//     return async(dispatch)=>{
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     };
// }; //If you are going to make an async call here, redux-thunk will be handy here.
// //Thunk allows us to return functions directly instead of just objects.

export const setLoading = () => {
  //This will go to the reducer and set loading to true
  return {
    type: SET_LOADING
  };
};
