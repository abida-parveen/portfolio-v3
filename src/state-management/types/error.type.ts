import type { CLEAR_ERRORS, GET_ERRORS } from "./actionTypes";

export type ValidationErrors = {
  validationErrors: {
    [key: string]: string;
  };
};

export type GetErrorsAction = {
  type: typeof GET_ERRORS;
  payload: ValidationErrors;
};

export type ClearErrorsAction = {
  type: typeof CLEAR_ERRORS;
};

export type ErrorAction = GetErrorsAction | ClearErrorsAction;
