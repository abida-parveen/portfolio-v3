import React, { useEffect, useState } from "react";
import styles from "./work-experience.module.css";
import _ from "lodash";
import CompanyName from "./CompanyName";
import CompanyDetails from "./CompanyDetails";
import useWindowSize from "../../../../hooks/useWindowSize";
import type { WorkExperienceDataType } from "../../../../types/workExperience.type";

interface WorkExperiencePropType {
  experience?: WorkExperienceDataType[];
}

const WorkExperience: React.FC<WorkExperiencePropType> = (props) => {
  const [activeItem, setActiveItem] = useState<WorkExperienceDataType | null>(null);
  const size = useWindowSize();

  useEffect(() => {
    props?.experience && setActiveItem(props?.experience[0]);
  }, [props]);

  return (
    <section id="work">
      <div className={`container`}>
        <div className={`${styles.work_experience_container}`}>
          <div className={`${styles.work_experience_left_col}`}>
            <h5>Career path</h5>
            <h2>Work Experiences</h2>
            <div className={`${styles.work_experience_title_container}`}>
              {props?.experience?.map((item) => (
                <CompanyName
                  item={item}
                  key={item.id}
                  size={size}
                  setActiveItem={setActiveItem}
                  activeItem={activeItem}
                />
              ))}
            </div>
          </div>
          {size > 767 && <CompanyDetails activeItem={activeItem} />}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
