import React from "react";
import styles from "./work-experience.module.css";
import Clip from "../../../general/Clip";
import type WorkExperienceDataType from "../../../../models/state-types/WorkExperienceDataType";

interface CompanyDetailsPropType {
  activeItem: WorkExperienceDataType | null
}

const CompanyDetails: React.FC<CompanyDetailsPropType> = (props) => {
  const { activeItem } = props;
  return (
    <div className={`${styles.work_experience_right_col}`}>
      <h3>
        {activeItem?.designation} <span>{activeItem?.company}</span>
      </h3>
      <p className={`${styles.work_experience_content}`}>
        {activeItem?.location}
      </p>
      <p className={`${styles.work_experience_content}`}>
        {activeItem?.duration}
      </p>
      <div className={`${styles.clip_container}`}>
        {activeItem?.skillsUsed?.map((item, index) => (
          <Clip value={item} key={index} />
        ))}
      </div>
      <div className={`${styles.work_experience_spliter}`}></div>
      <ul className={`${styles.list}`}>
        {activeItem?.whatIdid?.map((item, index) => (
          <li className={`${styles.work_experience_content}`} key={index}>
            <span className={`${styles.whatIdidTitle}`}>{item.title}:</span>{" "}
            {item.desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetails;
