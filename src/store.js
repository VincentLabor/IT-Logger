import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./components/reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore( //This includes the reducer, the state, and the middleware essentially. 
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
