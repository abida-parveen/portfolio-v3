import { INIT_THEME, TOGGLE_THEME } from "../types";
import type { AppThunkType } from "../../models/state-types/AppThunkType";

export const toggleTheme = (): AppThunkType => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};

export const initTheme = (): AppThunkType => (dispatch) => {
  dispatch({
    type: INIT_THEME,
  });
};
