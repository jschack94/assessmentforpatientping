import { SET_ROUTES } from "../actionTypes";

const initialState = [];

const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTES:
      return action.payload;
    default:
      return state;
  }
};

export default routeReducer;
