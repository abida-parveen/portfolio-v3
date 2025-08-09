import React from "react";
import styles from "./work-experience.module.css";
import right_light from "/assets/icons/chevron-right-light.svg";
import right_dark from "/assets/icons/chevron-right-purple.svg";
import down_dark from "/assets/icons/chevron-down-purple.svg";
import down_light from "/assets/icons/chevron-down-light.svg";
import up_purplt from "/assets/icons/chevron-up-purple.svg";
import up_light from "/assets/icons/chevron-up-light.svg";
import CompanyDetails from "./CompanyDetails";
import _ from "lodash";
import { connect } from "react-redux";
import type { RootState } from "../../../../state-management/store";
import { themeMode, type ThemeModeType } from "../../../../models/state-types/ThemeModeType";
import type { WorkExperienceDataType } from "../../../../types/workExperience.type";

interface CompanyNamePropType {
  item: WorkExperienceDataType;
  size: number;
  setActiveItem: (item: WorkExperienceDataType | null) => void;
  activeItem: WorkExperienceDataType | null;
  theme: ThemeModeType;
}

const CompanyName: React.FC<CompanyNamePropType> = (props) => {
  const { item, size, setActiveItem, activeItem, theme } = props;
  const handleClick = () => {
    if (size < 768) {
      !_.isEmpty(activeItem) && activeItem.id === item.id
        ? setActiveItem(null)
        : setActiveItem(item);
    } else {
      setActiveItem(item);
    }
  };
  return (
    <>
      <div
        onClick={handleClick}
        className={`hover_size ${styles.work_experience_title} ${
          item.id === activeItem?.id && styles.work_experience_active
        }`}
      >
        <h4 className={`${styles.work_experience_title_heading}`}>
          {item.company.split(" ")[0]}
        </h4>
        {size > 1023 ? (
          item.id === activeItem?.id && (
            <img
              src={theme === themeMode.dark ? right_light : right_dark}
              alt="right icon"
              className={`${styles.work_experience_icon}`}
            />
          )
        ) : (
          <img
            src={
              size > 767
                ? theme === themeMode.dark
                  ? down_light
                  : down_dark
                : theme === themeMode.dark
                ? activeItem?.id === item.id
                  ? up_light
                  : down_light
                : activeItem?.id === item.id
                ? up_purplt
                : down_dark
            }
            alt="right icon"
            className={`${styles.work_experience_icon}`}
          />
        )}
      </div>
      {!_.isEmpty(activeItem) && size < 768 && activeItem.id === item.id && (
        <CompanyDetails activeItem={activeItem} />
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.themeMode,
});

export default connect(mapStateToProps)(CompanyName);
