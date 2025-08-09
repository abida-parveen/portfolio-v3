import { CLEAR_ERRORS, GET_ERRORS } from "../types/actionTypes";
import type { AppThunk } from "../types/actionInterfaces";

export type ErrorPayload = any;

export const clearErrors = (): AppThunk => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
export const dispatchErrors =
  (payload: ErrorPayload): AppThunk =>
  (dispatch) => {
    dispatch({
      type: GET_ERRORS,
      payload,
    });
  };
