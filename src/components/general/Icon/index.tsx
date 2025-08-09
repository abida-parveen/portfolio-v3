import React from "react";
import { connect } from "react-redux";
import styles from "./icon.module.css";
import type { RootState } from "../../../state-management/store";
import { themeMode, type ThemeModeType } from "../../../models/state-types/ThemeModeType";

interface IconPropType {
  source: {
    iconDark: string;
    iconLight: string
  };
  text: string;
  theme?: ThemeModeType;
  center?: boolean;
}

const Icon: React.FC<IconPropType> = (props) => {
  const { source, text, theme, center } = props;
  console.log(theme, themeMode.dark)
  return (
    <div
      className={`hover_size ${styles.icon_container} ${
        center && styles.icon_centered
      }`}
    >
      <img
        src={theme === themeMode.dark ? source.iconDark : source.iconLight}
        alt={text}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.themeMode,
});

export default connect(mapStateToProps)(Icon);
