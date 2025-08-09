import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../state-management/actions/errors";
import { initTheme } from "../../../state-management/actions/theme";
import Cursor from "../Cursor";
import {
  themeMode,
  type ThemeModeType,
  type ThemeObject,
} from "../../../models/state-types/ThemeModeType";
import type { RootState } from "../../../state-management/store";

interface MainLayoutProps {
  children: React.ReactNode;
  initTheme?: () => void;
  clearErrors?: () => void;
  currentTheme?: ThemeModeType;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children, initTheme, currentTheme } = props;
  let darkTheme: ThemeObject = {
    "--bg-primary": "#1E1E1E",
    "--text-primary": "#F1F1F1",
    "--text-secondary": "#B2B2B2",
    "--bg-navbar": "#000000",
    "--bg-secondary": "#282828",
    "--bg-alternative": "#4f4f4f",
    "--box-background": "#4f4f4f",
    "--box-text": "#F1F1F1",
    "--bg-popup": "#4f4f4f",
    "--bg-icon-container": "#f2f2f2",
    "--bg-card": "#4f4f4f",
  };
  let lightTheme: ThemeObject = {
    "--bg-primary": "#fffff",
    "--text-primary": "#232E35",
    "--text-secondary": "#656D72",
    "--bg-navbar": "#f0f0f0",
    "--bg-secondary": "#FBFBFB",
    "--bg-alternative": "#FBFBFB",
    "--box-background": "#eae6fe",
    "--box-text": "#7e74f1",
    "--bg-popup": "#ffffff",
    "--bg-icon-container": "#eae6fe",
    "--bg-card": "#ffffff",
  };
  useEffect(() => {
    if (initTheme) initTheme();
    return () => {
      if (props.clearErrors) props.clearErrors();
    };
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement | null;

    if (!root) return;

    const theme = currentTheme === themeMode.light ? lightTheme : darkTheme;
    for (const key in theme) {
      root.style.setProperty(key, theme[key]);
    }
  }, [currentTheme]);

  return typeof window !== "undefined" ? (
    <div className={`${currentTheme}`}>
      <Cursor />
      {children}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

const mapStateToProps = (state: RootState) => ({
  errors: state.errors,
  currentTheme: state.themeMode,
});
export default connect(mapStateToProps, { clearErrors, initTheme })(MainLayout);

