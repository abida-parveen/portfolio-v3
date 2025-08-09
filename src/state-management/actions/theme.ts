import { INIT_THEME, TOGGLE_THEME } from "../types/actionTypes";
import type { AppThunk } from "../types/actionInterfaces";

export const toggleTheme = (): AppThunk => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};

export const initTheme = (): AppThunk => (dispatch) => {
  dispatch({
    type: INIT_THEME,
  });
};
