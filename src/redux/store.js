import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  // for the redux devtools extension:
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
