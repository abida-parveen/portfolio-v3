import { CLEAR_ERRORS, GET_ERRORS } from "../types";
import type { AppThunkType } from "../../models/state-types/AppThunkType";
import type ValidationErrorType from "../../models/state-types/ValidationErrorType";

export const clearErrors = (): AppThunkType => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
export const dispatchErrors =
  (payload: ValidationErrorType): AppThunkType =>
  (dispatch) => {
    dispatch({
      type: GET_ERRORS,
      payload,
    });
  };
