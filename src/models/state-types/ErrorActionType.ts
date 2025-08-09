import type { CLEAR_ERRORS, GET_ERRORS } from "../../state-management/types";
import type ValidationErrorType from "./ValidationErrorType";

export type GetErrorsAction = {
  type: typeof GET_ERRORS;
  payload: ValidationErrorType;
};

export type ClearErrorsAction = {
  type: typeof CLEAR_ERRORS;
};

export type ErrorActionType = GetErrorsAction | ClearErrorsAction;
