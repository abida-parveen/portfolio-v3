import type ValidationErrorType from "../../models/state-types/ValidationErrorType";
import { CLEAR_ERRORS, GET_ERRORS } from "../types";
import type { ErrorActionType } from "../../models/state-types/ErrorActionType";

type ErrorState = ValidationErrorType | null;

const initialState: ErrorState = null;

const errorReducer = (
  state = initialState,
  action: ErrorActionType
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
