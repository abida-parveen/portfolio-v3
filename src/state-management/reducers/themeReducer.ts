import type BaseActionType from "../../models/state-types/BaseActionType";
import { themeMode, type ThemeModeType } from "../../models/state-types/ThemeModeType";
import { INIT_THEME, TOGGLE_THEME } from "../types";

const initialState: ThemeModeType = themeMode.dark;

const isValidTheme = (theme: string | null): theme is ThemeModeType =>
  theme === themeMode.dark || theme === themeMode.light;

const themeReducer = (
  state = initialState,
  action: BaseActionType
): ThemeModeType => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = localStorage.getItem("theme");
      const currentTheme = isValidTheme(theme) ? theme : themeMode.dark;
      const newTheme: ThemeModeType =
        currentTheme === themeMode.light ? themeMode.dark : themeMode.light;
      localStorage.setItem("theme", newTheme);
      return newTheme;
    }
    case INIT_THEME: {
      const theme = localStorage.getItem("theme");
      if (isValidTheme(theme)) {
        return theme;
      } else {
        localStorage.setItem("theme", themeMode.dark);
        return themeMode.dark;
      }
    }
    default:
      return state;
  }
};
export default themeReducer;
