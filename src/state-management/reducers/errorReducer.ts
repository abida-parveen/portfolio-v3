import { CLEAR_ERRORS, GET_ERRORS } from "../types/actionTypes";
import type { ErrorAction, ValidationErrors } from "../types/error.type";

type ErrorState = ValidationErrors | null;

const initialState: ErrorState = null;

const errorReducer = (
  state = initialState,
  action: ErrorAction
): ErrorState => {
  switch (action.type) {
    case GET_ERRORS: {
      return action.payload;
    }
    case CLEAR_ERRORS: {
      return null;
    }
    default:
      return state;
  }
};
export default errorReducer;
